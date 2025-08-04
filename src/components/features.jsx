import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Smartphone, Shield, Bell, Activity, MapPin, Camera, Mic, ImageIcon, MessageSquare, Phone, AppWindow } from 'lucide-react';
import frameImage from '../assets/frame.png';
import '../Features.css';

const featuresData = [
  {
    id: 0,
    icon: <AppWindow size={32} />,
    title: 'Intuitive & Beautiful UI',
    description: "Our application is designed with a clean, intuitive interface that makes powerful monitoring tools easy to use. The dashboard provides an at-a-glance overview of all connected devices.",
    isDashboard: true,
    color: '#a78bfa' // Purple
  },
  {
    id: 1,
    icon: <Camera size={32} />,
    title: 'Live Remote Camera',
    description: "Securely access the device's camera to see its surroundings in real-time. Perfect for ensuring your loved ones are safe or for locating a lost device.",
    color: '#4ade80' // Green
  },
  {
    id: 2,
    icon: <MapPin size={32} />,
    title: 'Real-time Location',
    description: 'Track the exact location with live GPS data and view a complete location history. Set up geofences to receive alerts when a device enters or leaves a specific area.',
    color: '#38bdf8' // Blue
  },
  {
    id: 3,
    icon: <Mic size={32} />,
    title: 'Live Microphone',
    description: 'Listen to the ambient sounds around the target device for comprehensive monitoring. Understand the context of a situation with one-way audio.',
    color: '#f472b6' // Pink
  },
  {
    id: 4,
    icon: <ImageIcon size={32} />,
    title: 'Gallery & Media Access',
    description: 'View photos and videos saved on the device. Our secure viewer ensures that you can monitor media without leaving a trace.',
    color: '#fb923c' // Orange
  },
  {
    id: 5,
    icon: <Phone size={32} />,
    title: 'Call & SMS Log',
    description: 'Monitor all incoming, outgoing, and missed calls, as well as text messages. Get a clear picture of all communications.',
    color: '#facc15' // Yellow
  },
  {
    id: 6,
    icon: <MessageSquare size={32} />,
    title: 'Live Chat View',
    description: 'Watch ongoing chats on popular platforms like WhatsApp, Instagram, Snapchat & Signal as they happen, including a preview of what\'s being typed.',
    color: '#2dd4bf' // Teal
  },
];

const ScreenContent = ({ feature }) => {
  if (feature.isDashboard) {
    return (
      <div className="dashboard-ui">
        <div className="dashboard-header">
            <Smartphone /> <span>John's Dashboard</span> <div className="online-dot" />
        </div>
        <div className="dashboard-grid">
            <div className="dashboard-card"><Shield /><span>Device Secure</span></div>
            <div className="dashboard-card"><Bell /><span>3 New Alerts</span></div>
            <div className="dashboard-card"><Activity /><span>Live Activity</span></div>
            <div className="dashboard-card"><MapPin /><span>Geofence On</span></div>
        </div>
        <div className="dashboard-footer">
            Dashboard
        </div>
      </div>
    );
  }

  return (
    <div className="feature-display">
      <div className="feature-display-icon" style={{ color: feature.color }}>{feature.icon}</div>
      <h3 className="feature-display-title">{feature.title}</h3>
    </div>
  );
};

// Helper function to convert hex color to an RGB string
const hexToRgb = (hex) => {
  let r = 0, g = 0, b = 0;
  // 3 digits
  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];
  // 6 digits
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }
  return `${+r}, ${+g}, ${+b}`;
};


const Features = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const featureSectionRef = useRef(null);

  // --- ANIMATION CONTROLS ---
  // 1. How far the device drops from the top initially.
  const dropDistance = '-100vh';
  // 2. The final resting position of the device (0vh is vertically centered).
  const finalDropPosition = '9vh';
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
    initial: { opacity: 0, y: 20, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1], staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20, filter: 'blur(8px)', transition: { duration: 0.4, ease: [0.4, 0.0, 0.2, 1] } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20, filter: 'blur(5px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const activeColor = featuresData[activeFeatureIndex].color;
  const activeColorRgb = hexToRgb(activeColor);

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
              <motion.div
                className="feature-icon-wrapper"
                style={{
                  '--icon-color': activeColor,
                  '--icon-color-rgb': activeColorRgb
                }}
                variants={itemVariants}
              >
                {featuresData[activeFeatureIndex].icon}
              </motion.div>
              <motion.h2 variants={itemVariants} className="feature-title-scrolly">{featuresData[activeFeatureIndex].title}</motion.h2>
              <motion.p variants={itemVariants} className="feature-description-scrolly">{featuresData[activeFeatureIndex].description}</motion.p>
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