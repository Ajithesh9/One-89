const HeroBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5"/>
          </pattern>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#smallGrid)"/>
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="1"/>
          </pattern>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{stopColor: 'rgba(187, 134, 252, 0.3)', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: 'rgba(187, 134, 252, 0)', stopOpacity: 0}} />
          </radialGradient>
        </defs>
        
        {/* Animated glowing circle */}
        <circle cx="20%" cy="30%" r="400" fill="url(#glow)">
           <animate attributeName="cx" from="20%" to="80%" dur="20s" repeatCount="indefinite" begin="0s" />
           <animate attributeName="cy" from="30%" to="70%" dur="20s" repeatCount="indefinite" begin="0s" />
        </circle>
        <circle cx="80%" cy="70%" r="300" fill="url(#glow)">
           <animate attributeName="cx" from="80%" to="20%" dur="25s" repeatCount="indefinite" begin="-5s" />
           <animate attributeName="cy" from="70%" to="30%" dur="25s" repeatCount="indefinite" begin="-5s" />
        </circle>

        {/* The grid pattern */}
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default HeroBackground;