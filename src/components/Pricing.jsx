import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiX, FiShield, FiStar, FiAward } from 'react-icons/fi';
import FeatureComparisonTable from './FeatureComparisonTable';
import '../Pricing.css';

const pricingPlans = [
  {
    name: 'Bronze',
    price: 0,
    description: 'Get started with essential monitoring features for one device.',
    badgeIcon: <FiShield />,
    features: [
      { text: 'Bind 1 Device', included: true },
      { text: 'Basic Features', included: true },
      { text: 'Device Monitoring', included: true },
      { text: 'Device Control', included: false },
    ],
    ctaText: 'Get Started for Free',
    recommended: false,
  },
  {
    name: 'Silver',
    price: 79,
    description: 'A balanced plan with advanced features for multiple devices.',
    badgeIcon: <FiStar />,
    features: [
      { text: 'Bind up to 2 Devices', included: true },
      { text: 'All Silver Features', included: true },
      { text: 'Advanced Monitoring', included: true },
      { text: 'Full Device Control', included: true },
    ],
    ctaText: 'Choose Silver',
    recommended: false,
  },
  {
    name: 'Gold',
    price: 149,
    description: 'The ultimate package for complete control and monitoring.',
    badgeIcon: <FiAward />,
    features: [
      { text: 'Bind up to 5 Devices', included: true },
      { text: 'All Gold Features', included: true },
      { text: 'Ultimate Monitoring', included: true },
      { text: 'Ultimate Device Control', included: true },
    ],
    ctaText: 'Go for Gold',
    recommended: true, // Gold is now the recommended plan
  },
];

const Pricing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
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

        <div className="pricing-cards">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`pricing-card ${plan.name.toLowerCase()} ${plan.recommended ? 'recommended' : ''}`}
              whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeInOut' } }}
            >
              {plan.recommended && <div className="recommended-badge">Most Popular</div>}
              <div className="card-header">
                <div className="badge-icon">{plan.badgeIcon}</div>
                <h3>{plan.name}</h3>
              </div>
              <div className="card-content">
                <p className="plan-description">{plan.description}</p>
                <div className="price">
                  <span className="price-amount">₹{plan.price}</span>
                  {plan.price > 0 && <span className="price-period">/ month</span>}
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      {feature.included ? ( <FiCheck className="feature-icon-check" /> ) : ( <FiX className="feature-icon-x" /> )}
                      <span className={`feature-text ${!feature.included && 'excluded'}`}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="cta-button">
                {plan.ctaText}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <FeatureComparisonTable />
    </section>
  );
};

export default Pricing;