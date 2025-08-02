import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Icons updated: FiBarChart2 removed, FiType and FiMessageSquare added
import { FiCamera, FiMapPin, FiMic, FiImage, FiPhone, FiMessageSquare } from 'react-icons/fi';
import '../Features.css';

// Data updated to reflect the new features
const featuresData = [
  {
    icon: <FiCamera size={28} className="feature-icon" />,
    title: 'Live Remote Camera',
    description: "Securely access the device's camera to see its surroundings in real-time.",
  },
  {
    icon: <FiMapPin size={28} className="feature-icon" />,
    title: 'Real-time Location',
    description: 'Track the exact location with live GPS data and view a complete location history.',
  },
  {
    icon: <FiMic size={28} className="feature-icon" />,
    title: 'Live Microphone',
    description: 'Listen to the ambient sounds around the target device for comprehensive monitoring.',
  },
  {
    icon: <FiImage size={28} className="feature-icon" />,
    title: 'Gallery & Media Access',
    description: 'View photos and videos saved on the device to ensure data integrity and security.',
  },
  {
    icon: <FiPhone size={28} className="feature-icon" />,
    title: 'Call & SMS Log',
    description: 'Monitor all incoming, outgoing, and missed calls, as well as text messages.',
  },
  {
    icon: <FiMessageSquare size={28} className="feature-icon" />,
    title: 'Live Chat View + Typing Preview',
    description: 'Watch ongoing chats on WhatsApp, Instagram, Snapchat & Signal as they happen.',
  },
];

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="features">
      <div className="features-container">
        <h2>
          Explore Our Powerful Features
        </h2>
        <p className="features-description">
          Everything you need to monitor, manage, and secure your systems, all in one place.
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="features-grid"
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card"
            >
              {feature.icon}
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description-text">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;