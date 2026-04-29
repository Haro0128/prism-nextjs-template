import { siteConfig } from '@/lib/site-config'

export default function Services() {
  return (
    <section id="services" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-gray-500 uppercase">Services</p>
        <h2 className="mb-16 text-4xl font-bold text-white">YOUR_SERVICES_SECTION_HEADING</h2>
        <div className="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service) => (
            <div key={service.title} className="bg-black p-8 transition-colors hover:bg-white/5">
              <h3 className="mb-4 text-lg font-semibold text-white">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
