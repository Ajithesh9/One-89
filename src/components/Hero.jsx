import { motion, useScroll, useTransform, useSpring } from 'framer-motion'; // 1. Import useSpring
import { useState, useEffect, useRef } from 'react';
import { FiPlay, FiArrowRight, FiCheck, FiClock } from 'react-icons/fi';
import { DEPLOY_STEPS, KEY_FEATURES } from './heroContent';
import '../Hero.css';

const Hero = () => {
  const [deployStep, setDeployStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeployStep((prev) => (prev < DEPLOY_STEPS.length - 1 ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // 2. Create a smoothed scroll value with gentle physics for a smooth, non-choppy effect.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300, // Controls the "springiness"
    damping: 50,    // Controls the "resistance" or "drag"
    restDelta: 0.001
  });

  // 3. Use the SMOOTH progress value for the transformation.
  const y = useTransform(smoothProgress, [0, 1], ["0%", "120%"]);
  const zIndex = useTransform(scrollYProgress, [0.9, 1], [10, -1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div ref={targetRef} className="hero-section">
      <div className="hero-background-elements">
        <div className="hero-bg-orb orb-1"></div>
        <div className="hero-bg-orb orb-2"></div>
        <div className="hero-bg-orb orb-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-content-container"
          >
            <motion.div variants={itemVariants} className="hero-content-inner">
              <h1 className="hero-title">
                Keep Your
                <br />
                <span className="hero-title-gradient">Family Safe</span>
                <br />
                <span>Online</span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="hero-subtitle">
              Comprehensive parental monitoring and control. Set screen time limits, block inappropriate content, and monitor activity across all devices in real-time.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-buttons">
              <button className="hero-button primary">
                <span>Get Started</span>
                <FiArrowRight className="hero-button-icon" />
              </button>
              <button className="hero-button secondary">
                <FiPlay className="hero-button-icon" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="key-features-container">
              <h3 className="key-features-title">Key Features</h3>
              <div className="key-features-grid">
                {KEY_FEATURES.map((feature, index) => (
                  <div key={index} className="key-feature-card">
                    <div className="key-feature-icon-wrapper">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="key-feature-title">{feature.title}</h4>
                      <p className="key-feature-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y, zIndex }}
            variants={itemVariants}
            className="hero-interface-wrapper"
          >
            <div className="interface-container">
              <div className="interface-header">
                <div className="interface-header-content">
                  <div className="window-controls">
                    <div className="window-dots-container">
                      <div className="window-dot red"></div>
                      <div className="window-dot yellow"></div>
                      <div className="window-dot green"></div>
                    </div>
                    <h3 className="interface-title">Family Guardian Setup</h3>
                  </div>
                  <div className="live-indicator">
                    <div className="live-dot"></div>
                    <span>Live</span>
                  </div>
                </div>
              </div>

              <div className="interface-body">
                <div className="deploy-log">
                  {DEPLOY_STEPS.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: index <= deployStep ? 1 : 0.3, x: 0 }}
                      transition={{ delay: index * 0.5 }}
                      className={`deploy-step ${index === deployStep && step.status === 'active' ? 'active' : index <= deployStep ? 'complete' : ''}`}
                    >
                      <div className="deploy-step-icon">
                        {index <= deployStep ? (
                          step.status === 'active' ? (
                            <div className="spinner"></div>
                          ) : (
                            <FiCheck className="check-icon" />
                          )
                        ) : (
                          <FiClock className="clock-icon" />
                        )}
                      </div>
                      <div className="deploy-step-text">
                        <div className="deploy-step-header">
                          <span className="deploy-time">{step.time}</span>
                          <span className="deploy-message">{step.message}</span>
                        </div>
                        <div className="deploy-detail">{step.detail}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: deployStep >= DEPLOY_STEPS.length - 1 ? 1 : 0,
                    y: deployStep >= DEPLOY_STEPS.length - 1 ? 0 : 20
                  }}
                  className="success-message"
                >
                  <div className="success-message-content">
                    <FiCheck className="w-5 h-5" />
                    <span>Family Guardian is now protecting your network</span>
                  </div>
                  <p className="success-message-detail">
                    All devices are monitored and content filters are active
                  </p>
                </motion.div>
              </div>

              <div className="interface-footer">
                <div className="stats-grid">
                  <div>
                    <div className="stat-number">4</div>
                    <div className="stat-label">Devices Protected</div>
                  </div>
                  <div>
                    <div className="stat-number purple">24/7</div>
                    <div className="stat-label">Monitoring</div>
                  </div>
                  <div>
                    <div className="stat-number green">100%</div>
                    <div className="stat-label">Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;