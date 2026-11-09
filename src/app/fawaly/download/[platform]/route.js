const desktopRelease = 'https://github.com/daxowapp/fawaly/releases/download/desktop-v0.7.0/Sudo-Interns-0.7.0-';

const packages = {
  'windows-x64': 'windows-x64-setup.exe',
  'windows-arm64': 'windows-arm64-setup.exe',
  'linux-deb-amd64': 'linux-amd64.deb',
  'linux-deb-arm64': 'linux-arm64.deb',
  'linux-rpm-x86_64': 'linux-x86_64.rpm',
  'linux-rpm-aarch64': 'linux-aarch64.rpm',
  'linux-appimage-x86_64': 'linux-x86_64.AppImage',
  'linux-appimage-aarch64': 'linux-aarch64.AppImage',
};

export async function GET(_request, { params }) {
  const { platform } = await params;
  if (!Object.hasOwn(packages, platform)) return new Response('Not found', { status: 404 });
  return Response.redirect(desktopRelease + packages[platform], 302);
}
