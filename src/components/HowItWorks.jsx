import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiLink2, FiShield } from 'react-icons/fi';
import '../HowItWorks.css';


const stepsData = [
  {
    icon: <FiDownload />,
    title: 'Install The Application',
    description: 'First, download and install the application on both your primary device and the target node you wish to monitor.',
  },
  {
    icon: <FiLink2 />,
    title: 'Connect The Devices',
    description: 'Use your unique, secure code to link the two devices. The connection is encrypted and private.',
  },
  {
    icon: <FiShield />,
    title: 'Begin Monitoring',
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
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="how-it-works-section" id="howitworks">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="how-it-works-container"
      >
        <motion.h2 variants={itemVariants} className="how-it-works-title">
          Get Started in 3 Simple Steps
        </motion.h2>
        <motion.p variants={itemVariants} className="how-it-works-subtitle">
          Our streamlined process ensures you are up and running in minutes.
        </motion.p>

        <div className="steps-grid">
          {stepsData.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="step-card"
            >
              <div className="step-card-header">
                <div className="step-card-icon">
                  {step.icon}
                </div>
                <div className="step-card-number">
                  0{index + 1}
                </div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;