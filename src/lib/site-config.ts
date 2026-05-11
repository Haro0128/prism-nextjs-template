/**
 * PRISM — Site Configuration
 */

export const siteConfig = {
  // ── 基本情報 ──────────────────────────────────────────────
  name: 'PRISM',
  legalName: 'PRISM',
  tagline: 'AI Creative Studio',
  description:
    'AIクリエイティブチームが、LP・ブランド・Web・SNSを一気通貫で制作します。センスと成果、どちらも妥協しない。',

  // ── SEO / OGP ─────────────────────────────────────────────
  url: 'https://prism-creative.jp',
  ogImage: '/og-image.png',
  twitterHandle: '@prism_creative',

  // ── ナビゲーション ─────────────────────────────────────────
  nav: [
    { href: '#services', label: 'Services' },
    { href: '#works', label: 'Works' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ],

  // ── Hero セクション ────────────────────────────────────────
  hero: {
    headingLine1: 'センスと成果、',
    headingLine2: 'どちらも妥協しない。',
    body: 'AIクリエイティブチームが、LP・ブランド・Web・SNSを一気通貫で制作します。',
    ctaPrimary: 'サービスを見る',
    ctaSecondary: '無料相談する',
  },

  // ── Services セクション ────────────────────────────────────
  services: [
    {
      title: 'LP制作',
      description: '高転換率を追求したランディングページを、戦略設計からデザイン・実装まで一貫して制作します。',
    },
    {
      title: 'ブランドVI設計',
      description: 'ロゴ・カラー・タイポグラフィを体系化し、すべてのタッチポイントで一貫したブランド体験を構築します。',
    },
    {
      title: 'Web開発・UI実装',
      description: 'Next.js・Cloudflare Workersを用いた高速・高品質なWebサイト・Webアプリを開発します。',
    },
    {
      title: 'SNS・コンテンツ制作',
      description: 'Instagram / TikTok / X向けのビジュアルコンテンツとコピーを継続的に制作・運用します。',
    },
    {
      title: 'SEO・広告運用',
      description: '検索流入の最大化と広告ROIの改善を、データドリブンで実行します。',
    },
    {
      title: '映像・モーション制作',
      description: 'プロモーション映像・リール・アニメーションを企画から納品まで対応します。',
    },
  ],

  // ── Works セクション ──────────────────────────────────────
  works: [
    {
      client: 'ARKANA Consulting',
      category: 'Web Development',
      tags: ['Next.js', 'Cloudflare Workers'],
      highlight: 'Lighthouse 98点',
      description: 'コンサルティングファームのコーポレートサイトをフルスクラッチで設計・開発。圧倒的なパフォーマンスと洗練されたブランド表現を両立。',
    },
    {
      client: 'CIEL Skincare',
      category: 'LP Design',
      tags: ['ダーク', 'ラグジュアリー', 'エディトリアル'],
      highlight: 'コンバージョン率 3.2倍',
      description: 'プレミアムスキンケアブランドのLPを、ダーク×ラグジュアリーなエディトリアルデザインで制作。ブランドの世界観とCVRを両立。',
    },
  ],

  // ── Team セクション ────────────────────────────────────────
  team: {
    director: {
      name: 'ハロ',
      role: 'Creative Director',
      description: 'AIチームを統率するクリエイティブディレクター。全プロジェクトの品質を保証します。',
    },
    core: [
      { name: 'Rex', role: '戦略PL', description: 'プロジェクト全体の戦略立案とプランニングを担当。' },
      { name: 'Mia', role: 'LP・データ分析', description: 'ランディングページ設計とコンバージョンデータ分析を専任。' },
      { name: 'Hana', role: 'グラフィック・ブランド', description: 'ビジュアルアイデンティティとグラフィックデザインを担当。' },
      { name: 'Leo', role: '映像・モーション', description: '映像制作・モーショングラフィックスを担当。' },
      { name: 'Sora', role: 'SNS・コンテンツ', description: 'SNSコンテンツの企画・制作・運用を担当。' },
      { name: 'Ren', role: 'SEO・広告運用', description: '検索最適化と広告パフォーマンス改善を担当。' },
      { name: 'Kai', role: 'エンジニア・テック', description: 'テクノロジー選定とエンジニアリングを担当。' },
      { name: 'Nova', role: 'Web開発・UI', description: 'フロントエンド実装とUI設計を担当。' },
      { name: 'Aya', role: 'PM・クライアント対応', description: 'プロジェクト管理とクライアントコミュニケーションを担当。' },
    ],
    extended: [
      { name: 'Cole', role: 'セールス・営業' },
      { name: 'Luna', role: '秘書・スケジュール管理' },
      { name: 'Zoe', role: 'カスタマーサクセス' },
      { name: 'Lex', role: '法務' },
      { name: 'Prof. Aria', role: 'MBA講師' },
    ],
    instagram: [
      { name: 'Lumi', role: 'インスタ運用' },
      { name: 'Kael', role: 'SNS分析' },
      { name: 'Rio', role: 'DM対応' },
      { name: 'Noa', role: 'ビジュアル制作' },
    ],
  },

  // ── Contact セクション ─────────────────────────────────────
  contact: {
    heading: '無料相談する',
    subheading: 'LP制作・ブランド設計・Web開発など、まずはお気軽にご相談ください。48時間以内にご返信します。',
    submitLabel: '相談を送る',
  },
} as const
