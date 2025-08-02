import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck } from 'react-icons/fi';

const pricingPlans = [
  {
    name: 'Bronze',
    price: { monthly: 9, annually: 90 },
    description: 'For essential monitoring needs.',
    features: [
      'Real-time Location Tracking',
      'Call & SMS Log',
      'Basic App Usage',
      '24/7 Support',
    ],
    recommended: false,
  },
  {
    name: 'Silver',
    price: { monthly: 19, annually: 190 },
    description: 'The most popular choice for complete oversight.',
    features: [
      'All Bronze Features',
      'Live Remote Camera',
      'Live Microphone',
      'Gallery & Media Access',
      'Detailed App Analytics',
    ],
    recommended: true,
  },
  {
    name: 'Gold',
    price: { monthly: 29, annually: 290 },
    description: 'Ultimate power for professional-grade monitoring.',
    features: [
      'All Silver Features',
      'Priority Support',
      'Advanced Configuration',
      'API Access',
    ],
    recommended: false,
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annually'

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        {/* Section Header */}
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-dark-onSurface">
          Choose Your Plan
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 text-lg text-dark-onSurfaceSecondary max-w-2xl mx-auto">
          Simple, transparent pricing. No hidden fees.
        </motion.p>

        {/* Billing Cycle Toggle */}
        <motion.div variants={itemVariants} className="mt-10 flex justify-center items-center gap-4">
          <span className={`font-medium ${billingCycle === 'monthly' ? 'text-dark-onSurface' : 'text-dark-onSurfaceSecondary'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
              billingCycle === 'monthly' ? 'bg-dark-primary' : 'bg-dark-surface'
            }`}
          >
            <motion.div
              className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full"
              layout
              transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            />
          </button>
          <span className={`font-medium ${billingCycle === 'annually' ? 'text-dark-onSurface' : 'text-dark-onSurfaceSecondary'}`}>
            Annually <span className="text-sm text-dark-secondary">(Save 15%)</span>
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col bg-dark-surface rounded-2xl p-8 border ${
                plan.recommended ? 'border-dark-primary' : 'border-white/10'
              } ${plan.recommended ? 'scale-105 z-10' : 'lg:scale-95'}`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dark-primary text-dark-onPrimary text-sm font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-dark-onSurface">{plan.name}</h3>
              <p className="mt-2 text-dark-onSurfaceSecondary">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-dark-onSurface">
                  ${plan.price[billingCycle]}
                </span>
                <span className="text-dark-onSurfaceSecondary">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              <button
                className={`w-full mt-8 py-3 rounded-lg font-bold transition-colors ${
                  plan.recommended
                    ? 'bg-dark-primary text-dark-onPrimary hover:bg-opacity-90'
                    : 'bg-white/10 text-dark-onSurface hover:bg-white/20'
                }`}
              >
                Get Started
              </button>
              <ul className="mt-8 space-y-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FiCheck className="w-5 h-5 text-dark-secondary flex-shrink-0" />
                    <span className="text-dark-onSurfaceSecondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;