#!/usr/bin/env python3
"""Check the production HTTP contract for Fawaly pages and self-hosted media."""

import argparse
from html.parser import HTMLParser
from urllib.error import HTTPError
from urllib.request import HTTPRedirectHandler, Request, build_opener


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.links = []
        self.videos = []
        self.sources = []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'a':
            self.links.append(attrs.get('href', ''))
        elif tag == 'video':
            self.videos.append(attrs)
        elif tag == 'source':
            self.sources.append(attrs)


def verify(base):
    opener = build_opener(NoRedirect)

    def get(path, headers=None):
        request = Request(base.rstrip('/') + path, headers=headers or {})
        try:
            response = opener.open(request, timeout=30)
        except HTTPError as error:
            response = error
        with response:
            return response.status, response.headers, response.read()

    for path in ['/', '/fawaly', '/fawaly/support', '/fawaly/engine', '/fawaly/privacy']:
        status, headers, body = get(path)
        assert status == 200, (path, status)
        assert 'text/html' in headers.get('Content-Type', ''), path
        html = body.decode('utf-8')
        page = Page(html)
        assert not any(link in ['/fawaly/download', '/fawaly/engine/download'] for link in page.links), path
        assert 'Coming soon' in html or 'coming soon' in html, path
        if path == '/':
            assert '/fawaly#showcase' in page.links and 'Your crew implements.' in html
        if path == '/fawaly':
            assert 'https://nagdy.me/' in page.links
            assert len(page.videos) == 1
            video = page.videos[0]
            assert 'controls' in video and 'playsinline' in video
            assert 'autoplay' not in video and video.get('preload') == 'none'
            assert video.get('poster') == '/fawaly-assets/showcase-poster.jpg'
            assert any(s.get('src') == '/fawaly-assets/fawaly-showcase.mp4' and s.get('type') == 'video/mp4' for s in page.sources)
        assert 'Open Fawaly Engine' not in html and 'افتح Fawaly Engine' not in html, path
        print('PASS', path)

    for path in ['/fawaly/download', '/fawaly/engine/download']:
        status, headers, _ = get(path)
        assert status == 302 and headers.get('Location') == '/fawaly', (path, status, headers.get('Location'))
        print('PASS', path, 'relative redirect')

    status, headers, body = get('/fawaly-assets/showcase-poster.jpg')
    assert status == 200 and 'image/jpeg' in headers.get('Content-Type', '') and body[:2] == b'\xff\xd8'
    print('PASS poster')
    status, headers, body = get('/fawaly-assets/fawaly-showcase.mp4', {'Range': 'bytes=0-1023'})
    assert status == 206 and len(body) == 1024, (status, len(body))
    assert 'video/mp4' in headers.get('Content-Type', '')
    assert headers.get('Content-Range') == 'bytes 0-1023/12791765', headers.get('Content-Range')
    assert b'ftyp' in body and b'moov' in body
    print('PASS video byte-range playback and fast-start header')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('base_url', help='Local production server or public origin, e.g. https://daxow.com')
    verify(parser.parse_args().base_url)
