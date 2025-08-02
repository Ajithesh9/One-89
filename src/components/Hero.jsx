import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import '../Hero.css';

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
    <section id="home">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="hero-title"
        >
          Complete Peace of Mind
          <br />
          <span className="hero-title-highlight">for Modern Systems</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="hero-subtitle"
        >
          Our application gives you the powerful, easy-to-use tools you need to monitor and control your systems remotely, ensuring stability and performance.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="hero-buttons"
        >
          <button className="hero-button hero-button-primary">
            <FiDownload />
            <span>Download for Primary</span>
          </button>
          <button className="hero-button hero-button-secondary">
            <span>Download for Node</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;