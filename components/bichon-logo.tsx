interface BichonLogoProps {
  className?: string
}

export function BichonLogo({ className }: BichonLogoProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sparkle lines around head */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="20" y1="25" x2="15" y2="20" />
        <line x1="30" y1="15" x2="25" y2="8" />
        <line x1="45" y1="8" x2="45" y2="2" />
        <line x1="60" y1="15" x2="65" y2="8" />
        <line x1="75" y1="25" x2="80" y2="20" />
        <line x1="85" y1="40" x2="92" y2="35" />
      </g>
      
      {/* Main fluffy head shape */}
      <path
        d="M50 25C35 25 25 35 25 50C25 45 20 40 20 45C20 50 25 55 30 55C25 60 25 65 30 68C35 70 40 68 45 70C50 72 55 70 60 68C65 65 65 60 60 55C65 55 70 50 70 45C70 40 65 45 65 50C65 35 55 25 50 25Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Eyes */}
      <circle cx="42" cy="45" r="2" fill="black" />
      <circle cx="58" cy="45" r="2" fill="black" />
      
      {/* Nose */}
      <ellipse cx="50" cy="52" rx="2" ry="1.5" fill="black" />
      
      {/* Mouth */}
      <path
        d="M50 55C48 58 45 60 42 58"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 55C52 58 55 60 58 58"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Tongue */}
      <ellipse cx="50" cy="60" rx="3" ry="2" fill="#ff6b9d" />
      
      {/* Body/neck area */}
      <path
        d="M35 68C35 75 40 85 45 90C50 95 55 90 60 85C65 75 65 68 60 68"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Fluffy texture lines */}
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3">
        <path d="M30 40C32 38 34 40 36 38" />
        <path d="M60 38C62 40 64 38 66 40" />
        <path d="M28 50C30 48 32 50 34 48" />
        <path d="M62 48C64 50 66 48 68 50" />
        <path d="M35 75C37 73 39 75 41 73" />
        <path d="M55 73C57 75 59 73 61 75" />
      </g>
    </svg>
  )
}
