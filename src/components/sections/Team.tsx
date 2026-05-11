import { siteConfig } from '@/lib/site-config'

export default function Team() {
  const { team } = siteConfig
  return (
    <section id="team" className="bg-[#0d0d1a] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-[#5a587a] uppercase">Team</p>
        <h2 className="mb-4 text-4xl font-bold text-[#e8e6f0]">19名体制のAIチーム</h2>
        <p className="mb-16 text-[#a8a6c0]">
          AIエージェント18名 + ディレクター1名。専門特化したメンバーが連携し、あらゆるクリエイティブ課題に対応します。
        </p>

        {/* Core Team */}
        <div className="mb-12">
          <p className="mb-6 text-xs tracking-[0.3em] text-[#5a587a] uppercase">Core Team — 9名</p>
          <div className="grid gap-px bg-[rgba(255,255,255,0.06)] sm:grid-cols-2 lg:grid-cols-3">
            {team.core.map((member) => (
              <div key={member.name} className="bg-[#0d0d1a] p-6 transition-colors hover:bg-[#12121f]">
                <p className="text-base font-semibold text-[#e8e6f0]">{member.name}</p>
                <p className="mt-1 mb-3 text-xs tracking-wider text-[#5a587a]">{member.role}</p>
                <p className="text-sm leading-relaxed text-[#a8a6c0]">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Extended & Instagram Teams */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-6 text-xs tracking-[0.3em] text-[#5a587a] uppercase">Extended Team — 5名</p>
            <div className="grid gap-px bg-[rgba(255,255,255,0.06)]">
              {team.extended.map((member) => (
                <div key={member.name} className="flex items-center gap-4 bg-[#0d0d1a] px-5 py-4 transition-colors hover:bg-[#12121f]">
                  <span className="w-24 text-sm font-semibold text-[#e8e6f0]">{member.name}</span>
                  <span className="text-xs text-[#5a587a]">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-6 text-xs tracking-[0.3em] text-[#5a587a] uppercase">Instagram専任チーム — 4名</p>
            <div className="grid gap-px bg-[rgba(255,255,255,0.06)]">
              {team.instagram.map((member) => (
                <div key={member.name} className="flex items-center gap-4 bg-[#0d0d1a] px-5 py-4 transition-colors hover:bg-[#12121f]">
                  <span className="w-24 text-sm font-semibold text-[#e8e6f0]">{member.name}</span>
                  <span className="text-xs text-[#5a587a]">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
