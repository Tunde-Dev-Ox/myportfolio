import { Inter } from 'next/font/google';
import '../assets/scss/main.scss';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Joseph Tunde',
  description: 'Joseph Tunde is a technical product manager, project manager, product leader, and writer building exceptional products and teams.',
  image: 'https://wwww.josephtunde.me/tunde.png',
  twitterHandle: '@__jot',
  siteUrl: 'https://www.josephtunde.me',
  siteLanguage: 'en',
  siteLocale: 'en_US',
  authorName: 'Joseph Tunde',
  authorAvatar: 'https://wwww.josephtunde.me/tunde.png',
  authorDescription: 'Joseph Tunde is a technical product manager, project manager, product leader, and writer building exceptional products and teams.',
  defaultTitle: 'Joseph Tunde',
  defaultDescription: 'Joseph Tunde is a technical product manager, project manager, product leader, and writer building exceptional products and teams.',
  defaultImage: 'https://wwww.josephtunde.me/tunde.png',
  defaultTwitterHandle: '@__jot',
  defaultAuthor: 'Joseph Tunde',
  defaultAuthorAvatar: 'https://wwww.josephtunde.me/tunde.png',
  defaultAuthorDescription: 'Joseph Tunde is a technical product manager, project manager, product leader, and writer building exceptional products and teams.',
  socialLinks: {
      twitter: 'https://twitter.com/__jot',
      linkedin: 'https://www.linkedin.com/in/josephtunde/',
      github: 'https://github.com/Tunde-Dev-Ox',
      email: 'mailto:iamjosephtunde@gmail.com',
  },
  metadataBase: new URL('https://www.josephtunde.me'),
  icons: {
      favicon: '/favicon.ico',
      appleTouchIcon: '/apple-touch-icon.png',
      maskIcon: '/safari-pinned-tab.svg',
      msTileImage: '/mstile-150x150.png',
  },
  keywords: [
      'Joseph Tunde',
      'Joseph Tunde Blog',
      'Product Manager',
      'Project Manager',
      'Product Leader',
      'Writer',
      'Joseph Tunde Projects',
      'Product Management',
      'Project Management',
      'Product Leadership',
      'Writing',
      'Product Manager Portfolio',
      'Product Manager Blog',
      'Joseph Tunde Contact',
  ],
  openGraph: {
      type: 'website',
      locale: 'en_US',
      description: 'Joseph Tunde is a technical product manager, project manager, product leader, and writer building exceptional products and teams.',
      url: 'https://www.josephtunde.me',
      site_name: 'Joseph Tunde',
      images: [
          {
              url: 'https://wwww.josephtunde.me/tunde.png',
              width: 800,
              height: 600,
              alt: 'Joseph Tunde',
          },
      ],
  },

  twitter: {
      card: 'summary_large_image', // Use this instead of cardType
      site: '@__jot',
      creator: '@__jot',
      title: 'Joseph Tunde',
      handle: '@__jot',
      description: 'Joseph Tunde is a technical product manager, project manager, product leader, and writer building exceptional products and teams.',
      images: ['https://wwww.josephtunde.me/tunde.png'],
    },

  //robots and canonical urls 
  robots: {
      index: true,
      follow: true,
  },
  alternates: {
      canonical: 'https://wwww.josephtunde.me'
  }
}


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