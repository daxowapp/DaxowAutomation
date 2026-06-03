import './globals.css';

export const metadata = {
  title: 'Daxow Automation | AI Solutions for Universities & Enterprises',
  description: 'Daxow empowers universities and enterprises to automate complex workflows, drastically reducing operational costs and executing with unprecedented speed.',
  keywords: 'AI automation, university automation, enterprise automation, AI software, Daxow, automated admissions, operational efficiency',
  openGraph: {
    title: 'Daxow Automation',
    description: 'Automate the future of education and enterprise.',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>{children}</body>
    </html>
  );
}
