import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="h-screen w-full flex items-center justify-center">
      <motion.div
        className="text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-dark-onSurface leading-tight"
        >
          Complete Peace of Mind
          <br />
          <span className="text-dark-primary">for Modern Systems</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-dark-onSurfaceSecondary"
        >
          Our application gives you the powerful, easy-to-use tools you need to monitor and control your systems remotely, ensuring stability and performance.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-dark-primary text-dark-onPrimary font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105">
            <FiDownload />
            <span>Download for Primary</span>
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-dark-surface text-dark-onSurface font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105">
            <span>Download for Node</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;