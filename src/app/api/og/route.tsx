import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Festy';
  const header = searchParams.get('header') || '';
  const day = searchParams.get('day') || '';
  const date = searchParams.get('date') || '';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://festy.app';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0D0E12',
          color: '#FFFFFF',
          display: 'flex',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px',
            width: '100%',
            height: '100%',
            gap: 28,
          }}
        >
          {header ? (
            <div
              style={{
                fontSize: 32,
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: 0.5,
              }}
            >
              {header}
            </div>
          ) : null}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div
              style={{
                fontSize: 96,
                fontWeight: 800,
                lineHeight: 1.08,
                width: '100%',
                padding: '0 20px',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {title}
            </div>
          </div>
          {(day || date) ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 10 }}>
              {day ? (
                <div
                  style={{
                    border: '2px solid rgba(255,255,255,0.2)',
                    padding: '10px 22px',
                    borderRadius: 9999,
                    fontSize: 32,
                    color: 'rgba(255,255,255,0.9)',
                  }}
                >
                  {day}
                </div>
              ) : null}
              {date ? (
                <div style={{ fontSize: 36, color: 'rgba(255,255,255,0.7)' }}>{date}</div>
              ) : null}
            </div>
          ) : null}
        </div>
        {/* Logo */}
        <img
          src={`${baseUrl}/logos/festyLogo.svg`}
          alt="Festy"
          width={210}
          height={42}
          style={{ position: 'absolute', right: 80, bottom: 60, opacity: 0.95 }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}


