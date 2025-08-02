import { useState } from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for the pupils of the eyes
  const pupilVariants = {
    idle: {
      x: 0, // Centered position
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    },
    looking: {
      // Look left, then right, then back to center
      x: [-8, 8, 0], 
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div
      style={{ width: '60px', cursor: 'pointer' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_2)">
          {/* Left Eye */}
          <g transform="translate(14, 32)">
            <motion.g variants={pupilVariants} animate={isHovered ? "looking" : "idle"}>
              <circle cx="50" cy="32" r="32" fill="white"/>
              <circle cx="50" cy="32" r="14" fill="black"/>
            </motion.g>
          </g>
          {/* Right Eye */}
          <g transform="translate(64, 32)">
            <motion.g variants={pupilVariants} animate={isHovered ? "looking" : "idle"}>
              <circle cx="50" cy="32" r="32" fill="white"/>
              <circle cx="50" cy="32" r="14" fill="black"/>
            </motion.g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="128" height="128" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;