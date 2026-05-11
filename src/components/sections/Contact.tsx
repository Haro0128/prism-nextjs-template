import { siteConfig } from '@/lib/site-config'

export default function Contact() {
  const { contact } = siteConfig
  return (
    <section id="contact" className="bg-[#07070f] px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm tracking-[0.3em] text-[#5a587a] uppercase">Contact</p>
        <h2 className="mb-6 text-4xl font-bold text-[#e8e6f0]">{contact.heading}</h2>
        <p className="mb-12 text-[#a8a6c0]">{contact.subheading}</p>
        <form className="space-y-4 text-left">
          <div>
            <label className="mb-1 block text-sm text-[#a8a6c0]">お名前</label>
            <input
              type="text"
              className="w-full rounded border border-[rgba(255,255,255,0.10)] bg-[#12121f] px-4 py-3 text-[#e8e6f0] placeholder-[#5a587a] outline-none transition focus:border-[rgba(255,255,255,0.4)]"
              placeholder="山田 太郎"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-[#a8a6c0]">メールアドレス</label>
            <input
              type="email"
              className="w-full rounded border border-[rgba(255,255,255,0.10)] bg-[#12121f] px-4 py-3 text-[#e8e6f0] placeholder-[#5a587a] outline-none transition focus:border-[rgba(255,255,255,0.4)]"
              placeholder="example@company.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-[#a8a6c0]">メッセージ</label>
            <textarea
              rows={5}
              className="w-full rounded border border-[rgba(255,255,255,0.10)] bg-[#12121f] px-4 py-3 text-[#e8e6f0] placeholder-[#5a587a] outline-none transition focus:border-[rgba(255,255,255,0.4)]"
              placeholder="ご相談内容をご記入ください"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-[#e8e6f0] py-3 text-sm font-semibold tracking-wider text-[#07070f] transition-colors hover:bg-[#c8c6e0]"
          >
            {contact.submitLabel}
          </button>
        </form>
      </div>
    </section>
  )
}
