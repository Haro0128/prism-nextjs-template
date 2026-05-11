import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[rgba(255,255,255,0.06)] bg-[#07070f]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-widest text-[#e8e6f0]">
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-8 md:flex">
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wider text-[#a8a6c0] transition-colors hover:text-[#e8e6f0]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded border border-[rgba(255,255,255,0.3)] px-5 py-2 text-sm tracking-wider text-[#e8e6f0] transition-colors hover:bg-[#e8e6f0] hover:text-[#07070f]"
        >
          {siteConfig.contact.heading}
        </Link>
      </div>
    </header>
  )
}
