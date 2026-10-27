// Downloads are paused until the Mac App Store release; old links land on the product page.
// Relative Location: behind the host's proxy, request.url resolves to the internal localhost address.
export function GET() {
  return new Response(null, { status: 302, headers: { Location: '/fawaly' } });
}
