import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiX } from 'react-icons/fi';

// All features categorized and now ordered according to your UI preference
const featureCategories = [
  {
    category: 'Device Monitoring & Control',
    features: [
      { name: 'Monitor Apps', plans: { bronze: true, silver: true, gold: true } },
      { name: 'See Wallpapers', plans: { bronze: true, silver: true, gold: true } },
      { name: 'Monitor Volume', plans: { bronze: false, silver: true, gold: true } },
      { name: 'Monitor Brightness', plans: { bronze: false, silver: true, gold: true } },
      { name: 'Control Apps', plans: { bronze: false, silver: true, gold: true } },
      { name: 'Control Volume', plans: { bronze: false, silver: true, gold: true } },
      { name: 'Control Brightness', plans: { bronze: false, silver: true, gold: true } },
      { name: 'Set Wallpaper', plans: { bronze: false, silver: true, gold: true } },
      { name: 'Lock Mobile', plans: { bronze: false, silver: true, gold: true } },
    ],
  },
  {
    category: 'Communication Monitoring',
    features: [
      { name: 'Read Call History', plans: { bronze: true, silver: true, gold: true } },
      { name: 'Create Calls', plans: { bronze: true, silver: true, gold: true } },
      { name: 'Read Contacts', plans: { bronze: true, silver: true, gold: true } },
      { name: 'Monitor Notifications', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Read Messages', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Send Messages', plans: { bronze: false, silver: false, gold: true } },
    ],
  },
  {
    category: 'File & Data Access',
    features: [
      { name: 'Image Gallery', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Download Files', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Download Images', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Delete Files', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Delete Images', plans: { bronze: false, silver: false, gold: true } },
    ],
  },
  {
    category: 'Live Monitoring',
    features: [
      { name: 'Remote Camera', plans: { bronze: false, silver: false, gold: true } },
      { name: 'One-Way Audio', plans: { bronze: false, silver: false, gold: true } },
      { name: 'Live Location', plans: { bronze: false, silver: false, gold: true } },
    ],
  },
  {
    category: 'Core Utilities',
    features: [
      { name: 'Device Information', plans: { bronze: true, silver: true, gold: true } },
      { name: 'Device Location', plans: { bronze: true, silver: true, gold: true } },
    ],
  },
];

const FeatureComparisonTable = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  const getFeatureScore = (feature) => {
    return (feature.plans.bronze ? 1 : 0) + (feature.plans.silver ? 1 : 0) + (feature.plans.gold ? 1 : 0);
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="mt-24 max-w-5xl mx-auto"
    >
      <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center mb-10">
        Detailed Feature Comparison
      </motion.h3>
      
      <div className="bg-dark-surface rounded-xl p-2 md:p-4">
        {/* Table Header */}
        <motion.div variants={itemVariants} className="grid grid-cols-5 gap-2 md:gap-4 font-bold text-dark-onSurfaceSecondary text-sm md:text-base px-4 py-3">
          <div className="col-span-2">Feature</div>
          <div className="text-center">Bronze</div>
          <div className="text-center">Silver</div>
          <div className="text-center">Gold</div>
        </motion.div>

        {/* Table Body */}
        {featureCategories.map((category) => (
          <div key={category.category} className="mb-4">
            <motion.div variants={itemVariants} className="px-4 py-2">
              <h4 className="font-bold text-lg text-dark-onSurface">{category.category}</h4>
            </motion.div>
            {category.features
              .sort((a, b) => getFeatureScore(b) - getFeatureScore(a))
              .map((feature) => (
              <motion.div
                variants={itemVariants}
                key={feature.name}
                className="grid grid-cols-5 gap-2 md:gap-4 items-center px-4 py-3 border-t border-white/5 hover:bg-white/5 rounded-md"
              >
                <div className="col-span-2 text-dark-onSurfaceSecondary">{feature.name}</div>
                {['bronze', 'silver', 'gold'].map((plan) => (
                  <div key={plan} className="flex justify-center">
                    {feature.plans[plan] ? (
                      <FiCheck className="w-6 h-6 text-dark-secondary" />
                    ) : (
                      <FiX className="w-6 h-6 text-white/30" />
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        ))}

        {/* Manual row for Max Devices */}
        <motion.div variants={itemVariants} className="grid grid-cols-5 gap-2 md:gap-4 items-center px-4 py-3 border-t border-white/5 font-bold hover:bg-white/5 rounded-md">
            <div className="col-span-2 text-dark-onSurfaceSecondary">Max Devices</div>
            <div className="text-center text-dark-onSurface">1</div>
            <div className="text-center text-dark-onSurface">2</div>
            <div className="text-center text-dark-onSurface">5</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeatureComparisonTable;