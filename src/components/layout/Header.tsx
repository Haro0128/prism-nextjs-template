import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-widest text-white">
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-8 md:flex">
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded border border-white px-5 py-2 text-sm tracking-wider text-white transition-colors hover:bg-white hover:text-black"
        >
          {siteConfig.contact.heading}
        </Link>
      </div>
    </header>
  )
}
