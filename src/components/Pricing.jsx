import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiX, FiShield, FiStar, FiAward } from 'react-icons/fi';
import FeatureComparisonTable from './FeatureComparisonTable'; // Import the new component
import '../Pricing.css';

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
    <section id="pricing">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="pricing-container"
      >
        <motion.h2 variants={itemVariants}>
          Choose Your Plan
        </motion.h2>
        <motion.p variants={itemVariants} className="pricing-description">
          Simple, transparent pricing. Pick the plan that's right for you.
        </motion.p>

        {/* Pricing Summary Cards */}
        <div className="pricing-cards">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
            >
              <div className="card-content">
                <div className="badge-icon">{plan.badgeIcon}</div>
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="price-amount">₹{plan.price}</span>
                  <span className="price-period">/Mo.</span>
                </div>
                <ul className="features-list">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="feature-item">
                      {feature.included ? ( <FiCheck className="feature-icon-check" /> ) : ( <FiX className="feature-icon-x" /> )}
                      <span className={`feature-text ${!feature.included && 'excluded'}`}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`cta-button ${plan.recommended ? 'recommended' : 'default'}`}>
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