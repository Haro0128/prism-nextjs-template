import { siteConfig } from '@/lib/site-config'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-center text-sm text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
      </p>
    </footer>
  )
}
