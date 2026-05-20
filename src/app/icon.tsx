import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{
        width: 32,
        height: 32,
        background: '#cfe000'
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <svg width="22" height="20" viewBox="0 0 32 28" fill="none">
          <path d="M4 19L16 7L28 19" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 28L16 16L28 28" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}