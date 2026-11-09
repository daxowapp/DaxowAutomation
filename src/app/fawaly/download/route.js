const macRelease = 'https://github.com/daxowapp/fawaly/releases/download/v0.7.1/Sudo-Interns-0.7.1.zip';

export function GET() {
  return Response.redirect(macRelease, 302);
}
