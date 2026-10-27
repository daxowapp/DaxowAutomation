// Downloads are paused until the Mac App Store release; old links land on the product page.
export function GET(request) {
  return Response.redirect(new URL('/fawaly', request.url), 302);
}
