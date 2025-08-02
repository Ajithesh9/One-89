import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCamera, FiMapPin, FiMic, FiImageIcon, FiPhone, FiBarChart2 } from 'react-icons/fi';

const featuresData = [
  {
    icon: <FiCamera size={28} className="mb-4 text-dark-primary" />,
    title: 'Live Remote Camera',
    description: "Securely access the device's camera to see its surroundings in real-time.",
  },
  {
    icon: <FiMapPin size={28} className="mb-4 text-dark-primary" />,
    title: 'Real-time Location',
    description: 'Track the exact location with live GPS data and view a complete location history.',
  },
  {
    icon: <FiMic size={28} className="mb-4 text-dark-primary" />,
    title: 'Live Microphone',
    description: 'Listen to the ambient sounds around the target device for comprehensive monitoring.',
  },
  {
    icon: <FiImageIcon size={28} className="mb-4 text-dark-primary" />,
    title: 'Gallery & Media Access',
    description: 'View photos and videos saved on the device to ensure data integrity and security.',
  },
  {
    icon: <FiPhone size={28} className="mb-4 text-dark-primary" />,
    title: 'Call & SMS Log',
    description: 'Monitor all incoming, outgoing, and missed calls, as well as text messages.',
  },
  {
    icon: <FiBarChart2 size={28} className="mb-4 text-dark-primary" />,
    title: 'App Usage Analytics',
    description: 'Get detailed reports on which applications are being used and for how long.',
  },
];

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1,    // Trigger when 10% of the section is visible
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
    <section id="features" className="py-20 bg-dark-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-dark-onSurface">
          Explore Our Powerful Features
        </h2>
        <p className="mt-4 text-lg text-dark-onSurfaceSecondary max-w-2xl mx-auto">
          Everything you need to monitor, manage, and secure your systems, all in one place.
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-surface p-8 rounded-xl border border-white/10 hover:border-dark-primary/50 transition-colors duration-300 transform hover:-translate-y-2"
            >
              {feature.icon}
              <h3 className="text-xl font-bold text-dark-onSurface">{feature.title}</h3>
              <p className="mt-2 text-dark-onSurfaceSecondary">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;