import { siteConfig } from '@/lib/site-config'

export default function About() {
  const { about } = siteConfig
  return (
    <section id="about" className="bg-neutral-950 py-24 px-6">
      <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-24">
        <div className="lg:w-1/2">
          <p className="mb-3 text-sm tracking-[0.3em] text-gray-500 uppercase">About</p>
          <h2 className="mb-8 text-4xl font-bold text-white">{about.heading}</h2>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <p className="mb-6 leading-relaxed text-gray-400">{about.body1}</p>
          <p className="leading-relaxed text-gray-400">{about.body2}</p>
        </div>
      </div>
    </section>
  )
}
