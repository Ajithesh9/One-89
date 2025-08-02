import { useState } from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const blinkVariants = {
    idle: {
      opacity: 1,
      transition: { duration: 0.2 }
    },
    blinking: {
      opacity: [1, 0.1, 1, 0.1, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      style={{ width: '60px' }} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet">
        <defs>
          <clipPath id="__lottie_element_2">
            <rect width="1000" height="1000" x="0" y="0"></rect>
          </clipPath>
        </defs>
        <g clipPath="url(#__lottie_element_2)">
          {/* Main Body Paths - Color Changed to white */}
          <g transform="matrix(1,0,0,1,375.4239807128906,151.11898803710938)" opacity="1">
            <g opacity="1" transform="matrix(1,0,0,1,258.9599914550781,338.0299987792969)">
              <path fill="white" fillOpacity="1" d=" M18.19...z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="white" strokeOpacity="1" strokeWidth="42.732" d=" M18.19...z"></path>
            </g>
          </g>
          <g transform="matrix(1,0,0,1,107.59201049804688,151.11898803710938)" opacity="1">
            <g opacity="1" transform="matrix(1,0,0,1,240.74600219726562,338.0299987792969)">
              <path fill="white" fillOpacity="1" d=" M36.42...z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="white" strokeOpacity="1" strokeWidth="42.732" d=" M36.42...z"></path>
            </g>
          </g>

          {/* Blinking "Eyes" - Color Changed to white */}
          <motion.g
            transform="matrix(1,0,0,1,262.6259765625,395.71002197265625)"
            variants={blinkVariants}
            animate={isHovered ? "blinking" : "idle"}
          >
            <g opacity="1" transform="matrix(1,0,0,1,50.15599822998047,82.23600006103516)">
              <path fill="white" fillOpacity="1" d=" M0.0089...z"></path>
            </g>
          </motion.g>
          <motion.g
            transform="matrix(1,0,0,1,531.3359985351562,395.71002197265625)"
            variants={blinkVariants}
            animate={isHovered ? "blinking" : "idle"}
          >
            <g opacity="1" transform="matrix(1,0,0,1,50.15599822998047,82.23600006103516)">
              <path fill="white" fillOpacity="1" d=" M0.0089...z"></path>
            </g>
          </motion.g>
          
          {/* Internal Paths - Color Changed to the background color to create the "hollow" effect */}
          <g transform="matrix(1,0,0,1,470.83697509765625,246.13400268554688)" opacity="1">
            <g opacity="1" transform="matrix(1,0,0,1,145.20700073242188,231.28500366210938)">
                <path fill="#1E1E1E" fillOpacity="1" d=" M0.128...z"></path>
            </g>
          </g>
          <g transform="matrix(1,0,0,1,203.00299072265625,246.13400268554688)" opacity="1">
            <g opacity="1" transform="matrix(1,0,0,1,145.19500732421875,231.28500366210938)">
                <path fill="#1E1E1E" fillOpacity="1" d=" M0.164...z"></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Logo;