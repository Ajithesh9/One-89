import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiLink2, FiShield } from 'react-icons/fi';
import '../HowItWorks.css';

const stepsData = [
  {
    icon: <FiDownload className="w-12 h-12 text-dark-primary" />,
    title: '1. Install The Application',
    description: 'First, download and install the application on both your primary device and the target node you wish to monitor.',
  },
  {
    icon: <FiLink2 className="w-12 h-12 text-dark-primary" />,
    title: '2. Connect The Devices',
    description: 'Use your unique, secure code to link the two devices. The connection is encrypted and private.',
  },
  {
    icon: <FiShield className="w-12 h-12 text-dark-primary" />,
    title: '3. Begin Monitoring',
    description: 'You’re all set. Start monitoring activity, performance, and security from your primary dashboard.',
  },
];

const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-24 bg-dark-surface">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-dark-onSurface">
          Get Started in 3 Simple Steps
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 text-lg text-dark-onSurfaceSecondary max-w-2xl mx-auto">
          Our streamlined process ensures you are up and running in minutes.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {stepsData.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-dark-background rounded-full p-6 border-2 border-dark-primary/30">
                {step.icon}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-dark-onSurface">{step.title}</h3>
              <p className="mt-2 text-dark-onSurfaceSecondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;