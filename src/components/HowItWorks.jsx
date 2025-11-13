import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Link, ShieldCheck } from 'lucide-react';
import '../HowItWorks.css';

const stepsData = [
  {
    id: 'step1',
    icon: Download,
    title: 'Install App',
    description: 'Download the app on both your device (Parent) and the target device (Child).',
    color: '#BB86FC', // Purple accent
  },
  {
    id: 'step2',
    icon: Link,
    title: 'Connect',
    description: 'Use the unique secure code displayed on the child device to link them instantly.',
    color: '#03DAC6', // Teal accent
  },
  {
    id: 'step3',
    icon: ShieldCheck,
    title: 'Monitor',
    description: 'Access your dashboard to view real-time location, messages, and app activity.',
    color: '#60A5FA', // Blue accent
  },
];

const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="howitworks" className="how-it-works-section">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="how-it-works-container"
      >
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h4 variants={itemVariants} className="how-it-works-eyebrow">
            Easy Setup
          </motion.h4>
          <motion.h2 variants={itemVariants} className="how-it-works-title">
            Get Started in Minutes
          </motion.h2>
          <motion.p variants={itemVariants} className="how-it-works-subtitle">
            No complex rooting or technical skills required. Just three simple steps to peace of mind.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {stepsData.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="step-card group"
              >
                {/* Step Number Background - Fixed Opacity */}
                <div className="step-number-bg" style={{ color: step.color }}>
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div
                    className="step-icon-box"
                    style={{
                      backgroundColor: `${step.color}15`, // 15% opacity hex
                      borderColor: `${step.color}30`,    // 30% opacity hex
                      color: step.color
                    }}
                  >
                    <Icon size={28} strokeWidth={2} />
                  </div>

                  <h3 className="step-card-title">{step.title}</h3>
                  <p className="step-card-description">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;