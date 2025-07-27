import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://actionfiguretrend.vercel.app'),
  title: 'Create Custom Action Figures trend with AI Technology',
  description: 'Transform your photos into stunning collectible action figures with AI. Join 50K+ creators and enjoy unlimited customization! Start creating now!',
  keywords: 'AI action figures trend, create custom figures, photo to figure transformation, collectible action figures, professional quality figures, unlimited customization options, 4K resolution figures, fast figure generation',
  authors: [{ name: 'Action Figure Trend Team' }],
  creator: 'Action Figure Trend',
  publisher: 'Action Figure Trend',
  openGraph: {
    title: 'Create Custom Action Figures trend with AI Technology',
    description: 'Transform your photos into stunning collectible action figures with AI. Join 50K+ creators and enjoy unlimited customization! Start creating now!',
    url: 'https://actionfiguretrend.vercel.app',
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
    title: 'Create Custom Action Figures trend with AI Technology',
    description: 'Transform your photos into stunning collectible action figures with AI. Join 50K+ creators and enjoy unlimited customization! Start creating now!',
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