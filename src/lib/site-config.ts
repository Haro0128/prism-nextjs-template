/**
 * PRISM Next.js Template — Site Configuration
 *
 * このファイルをクライアントごとに編集してください。
 * コンポーネント側は変更不要です。
 */

export const siteConfig = {
  // ── 基本情報 ──────────────────────────────────────────────
  name: 'YOUR_COMPANY_NAME',
  legalName: 'YOUR_COMPANY_LEGAL_NAME',
  tagline: 'YOUR_INDUSTRY_OR_CATEGORY', // ヘッダー直下の小見出し (例: "Strategic Consulting")
  description: 'YOUR_SITE_META_DESCRIPTION',

  // ── ナビゲーション ─────────────────────────────────────────
  nav: [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#works', label: 'Works' },
    { href: '#contact', label: 'Contact' },
  ],

  // ── Hero セクション ────────────────────────────────────────
  hero: {
    headingLine1: 'YOUR_HERO_HEADING_LINE_1',
    headingLine2: 'YOUR_HERO_HEADING_LINE_2',
    body: 'YOUR_HERO_BODY_TEXT',
    ctaPrimary: 'YOUR_CTA_PRIMARY_LABEL',   // 例: "サービスを見る"
    ctaSecondary: 'YOUR_CTA_SECONDARY_LABEL', // 例: "お問い合わせ"
  },

  // ── About セクション ───────────────────────────────────────
  about: {
    heading: 'YOUR_ABOUT_HEADING',
    body1: 'YOUR_ABOUT_BODY_PARAGRAPH_1',
    body2: 'YOUR_ABOUT_BODY_PARAGRAPH_2',
  },

  // ── Services セクション ────────────────────────────────────
  services: [
    { title: 'YOUR_SERVICE_1_TITLE', description: 'YOUR_SERVICE_1_DESCRIPTION' },
    { title: 'YOUR_SERVICE_2_TITLE', description: 'YOUR_SERVICE_2_DESCRIPTION' },
    { title: 'YOUR_SERVICE_3_TITLE', description: 'YOUR_SERVICE_3_DESCRIPTION' },
    { title: 'YOUR_SERVICE_4_TITLE', description: 'YOUR_SERVICE_4_DESCRIPTION' },
  ],

  // ── Contact セクション ─────────────────────────────────────
  contact: {
    heading: 'YOUR_CONTACT_HEADING',          // 例: "お問い合わせ"
    subheading: 'YOUR_CONTACT_SUBHEADING',    // 例: "お気軽にご相談ください"
    submitLabel: 'YOUR_SUBMIT_BUTTON_LABEL',  // 例: "送信する"
  },
} as const
