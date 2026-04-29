import { siteConfig } from '@/lib/site-config'

export default function Contact() {
  const { contact } = siteConfig
  return (
    <section id="contact" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm tracking-[0.3em] text-gray-500 uppercase">Contact</p>
        <h2 className="mb-6 text-4xl font-bold text-white">{contact.heading}</h2>
        <p className="mb-12 text-gray-400">{contact.subheading}</p>
        <form className="space-y-4 text-left">
          <div>
            <label className="mb-1 block text-sm text-gray-400">お名前</label>
            <input
              type="text"
              className="w-full rounded border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-white/50"
              placeholder="山田 太郎"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-400">メールアドレス</label>
            <input
              type="email"
              className="w-full rounded border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-white/50"
              placeholder="example@company.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-gray-400">メッセージ</label>
            <textarea
              rows={5}
              className="w-full rounded border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-white/50"
              placeholder="ご相談内容をご記入ください"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-white py-3 text-sm font-semibold tracking-wider text-black transition-colors hover:bg-gray-200"
          >
            {contact.submitLabel}
          </button>
        </form>
      </div>
    </section>
  )
}
