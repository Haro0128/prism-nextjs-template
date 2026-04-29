import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export default function Hero() {
  const { hero, tagline } = siteConfig
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6 pt-20">
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-sm tracking-[0.3em] text-gray-400 uppercase">{tagline}</p>
        <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white md:text-7xl">
          {hero.headingLine1}
          <br />
          <span className="text-gray-400">{hero.headingLine2}</span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">{hero.body}</p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#services"
            className="rounded bg-white px-8 py-3 text-sm font-semibold tracking-wider text-black transition-colors hover:bg-gray-200"
          >
            {hero.ctaPrimary}
          </Link>
          <Link
            href="#contact"
            className="rounded border border-white/30 px-8 py-3 text-sm tracking-wider text-white transition-colors hover:border-white"
          >
            {hero.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  )
}
