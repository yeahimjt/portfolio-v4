import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './ThemeProvider';
import NavBar from './components/navbar/navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jonathan Trevino',
  description:
    'Jonathan Trevino: Experienced Software Engineer with 2 years of expertise in full-stack development, agile methodologies, and cutting-edge technologies. Delivering scalable solutions, optimized code, and seamless user experiences for web and mobile applications.',
  metadataBase: new URL('https://yeahimjt.me'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
