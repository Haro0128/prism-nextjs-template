import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site-config'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
          backgroundColor: '#000000',
          fontFamily: 'sans-serif',
        }}
      >
        {/* 背景グラデーション */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.06) 0%, transparent 60%)',
          }}
        />

        {/* タグライン */}
        <p
          style={{
            fontSize: 18,
            letterSpacing: '0.3em',
            color: '#6b7280',
            marginBottom: 24,
            textTransform: 'uppercase',
          }}
        >
          {siteConfig.tagline}
        </p>

        {/* 社名 */}
        <h1
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: 32,
            letterSpacing: '-0.02em',
          }}
        >
          {siteConfig.name}
        </h1>

        {/* ディスクリプション */}
        <p
          style={{
            fontSize: 24,
            color: '#9ca3af',
            lineHeight: 1.6,
            maxWidth: 700,
          }}
        >
          {siteConfig.description}
        </p>

        {/* ドメイン */}
        <p
          style={{
            position: 'absolute',
            bottom: 80,
            right: 80,
            fontSize: 18,
            color: '#4b5563',
            letterSpacing: '0.05em',
          }}
        >
          {siteConfig.url.replace('https://', '')}
        </p>
      </div>
    ),
    { ...size }
  )
}
