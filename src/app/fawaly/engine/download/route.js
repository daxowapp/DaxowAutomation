// The direct Mac release contains the execution engine.
export function GET() {
  return new Response(null, { status: 302, headers: { Location: '/fawaly/download' } });
}
