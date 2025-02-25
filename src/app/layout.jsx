import { Inter } from 'next/font/google';
import '../assets/scss/main.scss';

const inter = Inter({ subsets: ['latin'] });

import { metadata } from './metadata';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        </head>
        <body className={inter.className}>
            {children}
        </body>
    </html>
  );
}