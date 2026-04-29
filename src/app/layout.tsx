import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/lib/site-config'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  // ── metadataBase: 相対 URL を絶対 URL に解決するベース ───────
  metadataBase: new URL(siteConfig.url),

  // ── title: テンプレート形式でサブページにも対応 ───────────────
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },

  // ── meta description ────────────────────────────────────────
  description: siteConfig.description,

  // ── canonical ───────────────────────────────────────────────
  alternates: {
    canonical: '/',
  },

  // ── OGP ─────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '/',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/opengraph-image',   // app/opengraph-image.tsx が自動提供
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  // ── Twitter Card ────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },

  // ── robots ──────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-black text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
