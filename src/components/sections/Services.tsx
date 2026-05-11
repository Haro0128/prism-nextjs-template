import { siteConfig } from '@/lib/site-config'

export default function Services() {
  return (
    <section id="services" className="bg-[#0d0d1a] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-[#5a587a] uppercase">Services</p>
        <h2 className="mb-16 text-4xl font-bold text-[#e8e6f0]">提供サービス</h2>
        <div className="grid gap-px bg-[rgba(255,255,255,0.06)] md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => (
            <div key={service.title} className="bg-[#0d0d1a] p-8 transition-colors hover:bg-[#12121f]">
              <h3 className="mb-4 text-lg font-semibold text-[#e8e6f0]">{service.title}</h3>
              <p className="text-sm leading-relaxed text-[#a8a6c0]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
