import { siteConfig } from '@/lib/site-config'

export default function Works() {
  return (
    <section id="works" className="bg-[#07070f] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-[#5a587a] uppercase">Works</p>
        <h2 className="mb-16 text-4xl font-bold text-[#e8e6f0]">制作実績</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {siteConfig.works.map((work) => (
            <div
              key={work.client}
              className="group relative overflow-hidden rounded border border-[rgba(255,255,255,0.06)] bg-[#12121f] p-8 transition-colors hover:border-[rgba(255,255,255,0.15)]"
            >
              <p className="mb-2 text-xs tracking-[0.3em] text-[#5a587a] uppercase">{work.category}</p>
              <h3 className="mb-4 text-2xl font-bold text-[#e8e6f0]">{work.client}</h3>
              <p className="mb-6 text-sm leading-relaxed text-[#a8a6c0]">{work.description}</p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded bg-[#e8e6f0] px-3 py-1 text-xs font-semibold text-[#07070f]">
                  {work.highlight}
                </span>
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-[rgba(255,255,255,0.10)] px-3 py-1 text-xs text-[#a8a6c0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
