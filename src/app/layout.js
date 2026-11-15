import './globals.css';
import { Outfit, Inter } from 'next/font/google';
import MotionPreferences from '@/components/MotionPreferences';

const outfit = Outfit({ subsets: ['latin'], display: 'swap', variable: '--font-outfit' });
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const viewport = { colorScheme: 'light' };


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
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body><MotionPreferences>{children}</MotionPreferences></body>
    </html>
  );
}
