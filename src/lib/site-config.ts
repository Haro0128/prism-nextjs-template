/**
 * PRISM Next.js Template — Site Configuration
 *
 * このファイルをクライアントごとに編集してください。
 * コンポーネント側は変更不要です。
 */

export const siteConfig = {
  // ── 基本情報 ──────────────────────────────────────────────
  name: 'ARKANA Consulting',
  legalName: 'ARKANA Consulting',
  tagline: 'Strategic Consulting',
  description:
    '戦略・テクノロジー・デザインを融合し、企業の本質的な変革を支援するコンサルティングファームです。',

  // ── SEO / OGP ─────────────────────────────────────────────
  url: 'https://arkana-consulting.jp',          // 本番ドメインに変更してください
  ogImage: '/og-image.png',                      // public/og-image.png を配置してください
  twitterHandle: '@arkana_consulting',           // Twitter/X アカウントがあれば設定

  // ── ナビゲーション ─────────────────────────────────────────
  nav: [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#works', label: 'Works' },
    { href: '#contact', label: 'Contact' },
  ],

  // ── Hero セクション ────────────────────────────────────────
  hero: {
    headingLine1: '未来を、',
    headingLine2: '共に設計する。',
    body: 'ARKANAは戦略・テクノロジー・デザインを融合し、企業の本質的な変革を支援するコンサルティングファームです。',
    ctaPrimary: 'サービスを見る',
    ctaSecondary: 'お問い合わせ',
  },

  // ── About セクション ───────────────────────────────────────
  about: {
    heading: '本質的な問いから、\n変革は始まる。',
    body1:
      'ARKANAとは、「秘められた知識・叡智」を意味する言葉です。私たちは、表面的な課題解決にとどまらず、組織の深層にある本質的な問題を見抜き、持続的な価値創造へと導きます。',
    body2:
      '戦略コンサルタント、エンジニア、デザイナーが一体となったチームで、クライアントの変革パートナーとして伴走します。',
  },

  // ── Services セクション ────────────────────────────────────
  services: [
    {
      title: '経営戦略',
      description: '市場分析から中長期戦略の策定まで、事業の羅針盤を共に描きます。',
    },
    {
      title: 'DX推進',
      description: 'テクノロジーを活用した業務変革・デジタルトランスフォーメーションを支援します。',
    },
    {
      title: '組織変革',
      description: '人材・カルチャー・プロセスを最適化し、持続的な成長組織を構築します。',
    },
    {
      title: 'ブランド戦略',
      description: 'ビジョンを言語化・可視化し、強固なブランドアイデンティティを確立します。',
    },
  ],

  // ── Contact セクション ─────────────────────────────────────
  contact: {
    heading: 'お問い合わせ',
    subheading: 'プロジェクトのご相談・資料請求など、お気軽にお問い合わせください。',
    submitLabel: '送信する',
  },
} as const
