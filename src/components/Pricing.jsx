import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiX, FiShield, FiStar, FiAward } from 'react-icons/fi';
import FeatureComparisonTable from './FeatureComparisonTable'; // Import the new component

// Data for the summary cards, structured from the provided screenshot
const pricingPlans = [
  {
    name: 'Bronze',
    price: 0,
    badgeIcon: <FiShield className="w-12 h-12 text-purple-400" />,
    features: [
      { text: 'Can Bind 1 Device', included: true },
      { text: 'Bronze Features', included: true },
      { text: 'Device Monitoring', included: true },
      { text: 'Device Control', included: false },
      { text: 'Ad Free Experience', included: false },
    ],
    ctaText: 'Download',
    recommended: false,
  },
  {
    name: 'Silver',
    price: 79,
    badgeIcon: <FiStar className="w-12 h-12 text-teal-400" />,
    features: [
      { text: 'Can Bind 2 Devices', included: true },
      { text: 'Silver Features', included: true },
      { text: 'Device Monitoring', included: true },
      { text: 'Device Control', included: true },
      { text: 'Ad Free Experience', included: true },
    ],
    ctaText: 'Subscribe',
    recommended: true,
  },
  {
    name: 'Gold',
    price: 149,
    badgeIcon: <FiAward className="w-12 h-12 text-rose-400" />,
    features: [
      { text: 'Can Bind 5 Devices', included: true },
      { text: 'Gold Features', included: true },
      { text: 'Device Monitoring', included: true },
      { text: 'Ultimate Device Control', included: true },
      { text: 'Ad Free Experience', included: true },
    ],
    ctaText: 'Subscribe',
    recommended: false,
  },
];

const Pricing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="pricing" className="py-24 bg-dark-background">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-dark-onSurface">
          Choose Your Plan
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 text-lg text-dark-onSurfaceSecondary max-w-2xl mx-auto">
          Simple, transparent pricing. Pick the plan that's right for you.
        </motion.p>

        {/* Pricing Summary Cards */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative flex flex-col bg-dark-surface rounded-2xl p-8 border ${
                plan.recommended ? 'border-dark-primary' : 'border-white/10'
              } ${plan.recommended ? 'lg:scale-105' : ''}`}
            >
              <div className="flex-grow">
                <div className="flex justify-center mb-6">{plan.badgeIcon}</div>
                <h3 className="text-2xl font-bold text-dark-onSurface">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-extrabold text-dark-onSurface">₹{plan.price}</span>
                  <span className="text-dark-onSurfaceSecondary">/Mo.</span>
                </div>
                <ul className="mt-8 space-y-4 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      {feature.included ? ( <FiCheck className="w-5 h-5 text-dark-secondary flex-shrink-0" /> ) : ( <FiX className="w-5 h-5 text-red-500 flex-shrink-0" /> )}
                      <span className={`text-dark-onSurfaceSecondary ${!feature.included && 'opacity-60'}`}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full mt-10 py-3 rounded-lg font-bold transition-colors ${plan.recommended ? 'bg-dark-primary text-dark-onPrimary hover:bg-opacity-90' : 'bg-white/10 text-dark-onSurface hover:bg-white/20'}`}>
                {plan.ctaText}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* The new, detailed comparison table */}
      <FeatureComparisonTable />
    </section>
  );
};

export default Pricing;