import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://actionfiguretrend.vercel.app'),
  title: 'Action Figure Trend - Create Custom Action Figures with AI',
  description: 'Transform any photo into stunning collectible action figures using cutting-edge AI technology. Professional quality, unlimited creativity.',
  keywords: 'AI, action figures, photo transformation, collectibles, custom figures, AI art',
  authors: [{ name: 'Action Figure Trend Team' }],
  creator: 'Action Figure Trend',
  publisher: 'Action Figure Trend',
  openGraph: {
    title: 'Action Figure Trend - Create Custom Action Figures with AI',
    description: 'Transform any photo into stunning collectible action figures using cutting-edge AI technology.',
    url: 'https://actionfiguretrend.com',
    siteName: 'Action Figure Trend',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Action Figure Trend - AI-powered action figure generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Action Figure Trend - Create Custom Action Figures with AI',
    description: 'Transform any photo into stunning collectible action figures using cutting-edge AI technology.',
    images: ['/og-image.jpg'],
    creator: '@actionfiguretrend',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4704669548339622"
     crossorigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
