import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export default function Hero() {
  const { hero, tagline } = siteConfig
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#07070f] px-6 pt-20">
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-sm tracking-[0.3em] text-[#5a587a] uppercase">{tagline}</p>
        <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-[#e8e6f0] md:text-7xl">
          {hero.headingLine1}
          <br />
          <span className="text-[#a8a6c0]">{hero.headingLine2}</span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-[#a8a6c0]">{hero.body}</p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#services"
            className="rounded bg-[#e8e6f0] px-8 py-3 text-sm font-semibold tracking-wider text-[#07070f] transition-colors hover:bg-[#c8c6e0]"
          >
            {hero.ctaPrimary}
          </Link>
          <Link
            href="#contact"
            className="rounded border border-[rgba(255,255,255,0.2)] px-8 py-3 text-sm tracking-wider text-[#e8e6f0] transition-colors hover:border-[rgba(255,255,255,0.5)]"
          >
            {hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
