import { motion } from 'framer-motion';

const HeroInterface = () => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className="absolute bottom-0 w-full max-w-[870px] aspect-[870/440] z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-dark-background via-dark-background/80 to-transparent z-20" />
      
      {/* This is the direct translation of the ui-deploy-log SVG */}
      <svg width="100%" height="100%" viewBox="0 0 870 440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <image href="/src/assets/ui-deploy-log.svg" width="870" height="440" />

        {/* Animated Badges */}
        <g transform="translate(360, 180)">
          <motion.g initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 1.5, duration: 0.2 }}>
            <rect x="19.4238" width="67.0417" height="16.0208" rx="4.53125" fill="#FDF5D8"></rect>
            <path d="M23.6426 11.5104H25.2017V4.06079H23.6426V11.5104Z" fill="#603408"></path>
            {/* ... other paths for "In Progress" badge ... */}
          </motion.g>
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.2 }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.084 8.66138C13.084 12.2744 10.155 15.2034 6.54199 15.2034C2.92895 15.2034 0 12.2744 0 8.66138C0 5.04833 2.92895 2.11938 6.54199 2.11938C10.155 2.11938 13.084 5.04833 13.084 8.66138ZM4.96517 11.2672C5.28802 11.5901 5.81092 11.5919 6.13597 11.2712L6.82984 10.5868L10.0936 7.32299C10.3725 7.04407 10.373 6.59124 10.0945 6.31282L9.82482 6.04311C9.54641 5.76469 9.09358 5.7651 8.81466 6.04402L5.55958 9.2991L4.28061 8.02012C4.0022 7.74171 3.54936 7.74212 3.27045 8.02103L3.00025 8.29123C2.72133 8.57015 2.72092 9.02298 2.99934 9.3014L4.96517 11.2672Z" fill="#31A855"></path>
            <rect x="20.6641" width="63.6458" height="17.3229" rx="5" fill="#E7FCE9"></rect>
            {/* ... other paths for "Complete" badge ... */}
          </motion.g>
        </g>
        
        {/* Animated Sparkle */}
        <motion.g initial={{ scale: 0 }} animate={{ scale: [0, 1, 0] }} transition={{ delay: 1.8, duration: 0.7 }}>
          <path transform="translate(416, 373)" d="M3.84 7C6.68 7.26 8.92 10.29 8.92 14c0-.11.002-.22.006-.34.132-3.45-2.058-6.31-4.88-6.49C4.167 3.78 6.71 0 6.71 0 .8 3.78 3.87 6.72 3.84 7Z" fill="url(#hero-sparkle-gradient)" />
        </motion.g>

        {/* Animated Code Cover */}
        <motion.rect 
            x="245" y="236" height="160" fill="#181A1C"
            initial={{ width: 560 }}
            animate={{ width: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
        />

        {/* Animated Loader Icon */}
        <motion.g 
            transform="translate(248, 246)"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.1 }}
        >
            <path d="M5.8125 11.7373L1 0H2.1416L6.94727 11.7373H5.8125Z" fill="white"></path>
            <path d="M7.23242 7.08008H0V6H7.23242V7.08008Z" fill="white"></path>
            <path d="M2.13477 11.7373H1L5.80566 0H6.94727L2.13477 11.7373Z" fill="white"></path>
            <path d="M4.06641 14.1025H3V0H4.06641V14.1025Z" fill="white"></path>
        </motion.g>
        
        <defs>
            <linearGradient id="hero-sparkle-gradient" x1="5.4793" y1="10.5" x2="12.4783" y2="3.61921" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFC100"></stop>
                <stop offset="1" stopColor="#BF9100"></stop>
            </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default HeroInterface;