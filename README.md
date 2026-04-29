# PRISM Next.js Template

PRISMが社内で使用するコーポレートサイト向け Next.js テンプレートです。  
クライアントごとに `src/lib/site-config.ts` と `globals.css` を編集するだけで、素早く本番品質のサイトを構築できます。

## Tech Stack

| 技術 | バージョン |
|---|---|
| Next.js (App Router) | 16.x |
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| ESLint | 9.x |
| Prettier | 3.x |

## セットアップ手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/YOUR_ORG/prism-nextjs-template.git my-project
cd my-project
```

### 2. 依存パッケージをインストール

```bash
npm install
```

### 3. サイト情報を設定

`src/lib/site-config.ts` を開き、`YOUR_` で始まるすべての値をクライアント情報に書き換えます。

```ts
export const siteConfig = {
  name: 'クライアント社名',
  legalName: 'クライアント株式会社',
  tagline: 'キャッチコピー',
  description: 'SEO用メタディスクリプション',

  hero: {
    headingLine1: 'ヒーロー見出し 1行目',
    headingLine2: 'ヒーロー見出し 2行目',
    body: 'ヒーロー本文テキスト',
    ctaPrimary: 'メインCTAラベル',
    ctaSecondary: 'サブCTAラベル',
  },
  // ...
}
```

### 4. ブランドカラーを設定

`src/app/globals.css` の CSS 変数を変更します。

```css
:root {
  --color-brand-primary: #0066ff;       /* メインカラー */
  --color-brand-primary-hover: #0052cc; /* ホバー時 */
  --color-brand-accent: #ff6600;        /* アクセントカラー */
}
```

### 5. 開発サーバーを起動

```bash
npm run dev
```

`http://localhost:3000` を開いて確認します。

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx          # メタデータ・レイアウト
│   ├── page.tsx            # トップページ
│   └── globals.css         # ブランドカラー定義
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # ナビゲーション
│   │   └── Footer.tsx      # フッター
│   ├── sections/
│   │   ├── Hero.tsx        # ファーストビュー
│   │   ├── About.tsx       # 会社紹介
│   │   ├── Services.tsx    # サービス一覧
│   │   └── Contact.tsx     # お問い合わせフォーム
│   └── ui/                 # 汎用UIコンポーネント置き場
├── lib/
│   └── site-config.ts      # ★ クライアント情報をここに集約
└── types/                  # 型定義置き場
```

## 利用可能なコマンド

```bash
npm run dev           # 開発サーバー起動
npm run build         # 本番ビルド
npm run start         # 本番サーバー起動
npm run lint          # ESLint チェック
npm run lint:fix      # ESLint 自動修正
npm run format        # Prettier 整形
npm run format:check  # Prettier チェック
```

## セクションのカスタマイズ

### セクションの追加

1. `src/components/sections/` に新しいコンポーネントを作成
2. `src/app/page.tsx` にインポートして追加
3. 必要に応じて `site-config.ts` にデータを追加

### ナビゲーションの変更

`site-config.ts` の `nav` 配列を編集します。

```ts
nav: [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
],
```

## デプロイ

### Vercel（推奨）

```bash
npx vercel
```

### その他

```bash
npm run build
npm run start
```

## ライセンス

PRISM 社内テンプレート。外部への無断配布は禁止。
