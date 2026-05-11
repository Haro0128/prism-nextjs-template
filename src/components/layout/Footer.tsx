import { siteConfig } from '@/lib/site-config'

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#07070f] py-10 text-center text-sm text-[#5a587a]">
      <p>
        &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
      </p>
    </footer>
  )
}
