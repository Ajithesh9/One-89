import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiCamera, FiMapPin, FiMic, FiImage, FiPhone, FiMessageSquare, FiGrid, FiShield, FiBell, FiActivity, FiUser } from 'react-icons/fi';
import frameImage from '../assets/frame.png';
import '../Features.css';

const featuresData = [
  {
    id: 0,
    icon: <FiGrid size={32} />,
    title: 'Intuitive & Beautiful UI',
    description: "Our application is designed with a clean, intuitive interface that makes powerful monitoring tools easy to use. The dashboard provides an at-a-glance overview of all connected devices.",
    isDashboard: true,
  },
  {
    id: 1,
    icon: <FiCamera size={32} />,
    title: 'Live Remote Camera',
    description: "Securely access the device's camera to see its surroundings in real-time. Perfect for ensuring your loved ones are safe or for locating a lost device.",
  },
  {
    id: 2,
    icon: <FiMapPin size={32} />,
    title: 'Real-time Location',
    description: 'Track the exact location with live GPS data and view a complete location history. Set up geofences to receive alerts when a device enters or leaves a specific area.',
  },
  {
    id: 3,
    icon: <FiMic size={32} />,
    title: 'Live Microphone',
    description: 'Listen to the ambient sounds around the target device for comprehensive monitoring. Understand the context of a situation with one-way audio.',
  },
  {
    id: 4,
    icon: <FiImage size={32} />,
    title: 'Gallery & Media Access',
    description: 'View photos and videos saved on the device. Our secure viewer ensures that you can monitor media without leaving a trace.',
  },
  {
    id: 5,
    icon: <FiPhone size={32} />,
    title: 'Call & SMS Log',
    description: 'Monitor all incoming, outgoing, and missed calls, as well as text messages. Get a clear picture of all communications.',
  },
  {
    id: 6,
    icon: <FiMessageSquare size={32} />,
    title: 'Live Chat View',
    description: 'Watch ongoing chats on popular platforms like WhatsApp, Instagram, Snapchat & Signal as they happen, including a preview of what\'s being typed.',
  },
];

const ScreenContent = ({ feature }) => {
  if (feature.isDashboard) {
    return (
      <div className="dashboard-ui">
        <div className="dashboard-header">
            <FiUser /> <span>John's Dashboard</span> <div className="online-dot" />
        </div>
        <div className="dashboard-grid">
            <div className="dashboard-card"><FiShield /><span>Device Secure</span></div>
            <div className="dashboard-card"><FiBell /><span>3 New Alerts</span></div>
            <div className="dashboard-card"><FiActivity /><span>Live Activity</span></div>
            <div className="dashboard-card"><FiMapPin /><span>Geofence On</span></div>
        </div>
        <div className="dashboard-footer">
            Dashboard
        </div>
      </div>
    );
  }

  return (
    <div className="feature-display">
      <div className="feature-display-icon">{feature.icon}</div>
      <h3 className="feature-display-title">{feature.title}</h3>
    </div>
  );
};


const Features = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const featureSectionRef = useRef(null);

  // --- ANIMATION CONTROLS ---
  // 1. How far the device drops from the top initially.
  const dropDistance = '-100vh';
  // 2. The final resting position of the device (0vh is vertically centered).
  const finalDropPosition = '7vh';
  // 3. How far the device moves UP as you scroll down.
  const parallaxUpDistance = '-18%';
  // --------------------------

  const { scrollYProgress } = useScroll({
    target: featureSectionRef,
    offset: ['start start', 'end end'],
  });

  const deviceY = useTransform(scrollYProgress, [0, 1], ['0%', parallaxUpDistance]);
  const panelY = useTransform(scrollYProgress, [0, 0.15], [dropDistance, finalDropPosition]);
  const panelOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.08, 0.12], [0, 1]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const uiSectionDuration = 0.20;
      let newIndex;
      if (latest < uiSectionDuration) {
        newIndex = 0;
      } else {
        const remainingProgress = (latest - uiSectionDuration) / (1 - uiSectionDuration);
        newIndex = Math.min(
          1 + Math.floor(remainingProgress * (featuresData.length - 1)),
          featuresData.length - 1
        );
      }
      setActiveFeatureIndex(newIndex);
    });
  }, [scrollYProgress]);

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <section id="features" ref={featureSectionRef}>
      <div className="scrollytelling-container">
        <motion.div className="feature-description-panel" style={{ opacity: textOpacity }}>
          <div className="background-pattern" />
          <AnimatePresence mode="wait">
            <motion.div
              key={featuresData[activeFeatureIndex].id}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="feature-text-content"
            >
              <div className="feature-icon-wrapper">{featuresData[activeFeatureIndex].icon}</div>
              <h2 className="feature-title-scrolly">{featuresData[activeFeatureIndex].title}</h2>
              <p className="feature-description-scrolly">{featuresData[activeFeatureIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div className="device-panel-wrapper" style={{ y: panelY, opacity: panelOpacity }}>
             <motion.div className="device-panel" style={{ y: deviceY }}>
                <div className="device-image-wrapper">
                    <img src={frameImage} alt="Device Frame" className="device-frame-image" />
                    <div className="device-screen">
                        <AnimatePresence mode="wait">
                            <motion.div
                            key={featuresData[activeFeatureIndex].id}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="device-content-inner"
                            >
                            <ScreenContent feature={featuresData[activeFeatureIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;