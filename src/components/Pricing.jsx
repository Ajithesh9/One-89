import { useState } from 'react';
import { Check, Zap, Users, Shield, ArrowRight } from 'lucide-react'; // Removed CheckCircle2
import { motion, AnimatePresence } from 'framer-motion';
import '../Pricing.css';

// Data reordered: Bronze -> Silver -> Gold -> Diamond
const plans = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: '79.00',
    period: 'Weekly',
    description: 'Flexible weekly monitoring for fewer devices.',
    features: [
      'Starting From ₹79.00 | Weekly',
      'Can Pair Upto 3 Devices',
      'Essential Monitoring Features',
      'Basic Device Control',
    ],
    popular: false,
    color: '#BB86FC', // Purple
    buttonText: 'Get Bronze'
  },
  {
    id: 'silver',
    name: 'Silver',
    price: '300.00',
    period: 'Monthly',
    description: 'Standard monthly plan for up to 5 devices.',
    features: [
      'Starting From ₹300.00 | Monthly',
      'Can Pair Upto 5 Devices',
      'Standard Monitoring',
      'Device Restrictions',
    ],
    popular: false,
    color: '#9CA3AF', // Silver/Gray
    buttonText: 'Get Silver'
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '250.00',
    period: 'Monthly',
    billingNote: 'Billed 6 Months',
    description: 'Balanced plan for medium-sized needs.',
    features: [
      'Starting From ₹250.0 | Monthly (Billed 6 Months)',
      'Can Pair Upto 7 Devices',
      'Advanced Monitoring',
      'Enhanced Controls',
    ],
    popular: false,
    color: '#FBBF24', // Gold/Yellow
    buttonText: 'Get Gold'
  },
  {
    id: 'diamond',
    name: 'Diamond',
    price: '200.00',
    period: 'Monthly',
    billingNote: 'Billed Yearly',
    description: 'Maximum value for larger families.',
    features: [
      'Starting From ₹200.0 | Monthly (Billed Yearly)',
      'Can Pair Upto 10 Devices',
      'Full Suite of Features',
      'Priority Support',
    ],
    popular: true, // Best Value (Yearly)
    color: '#60A5FA', // Blue (from Capabilities)
    buttonText: 'Get Diamond'
  }
];

const Pricing = () => {
  // Default to the "Best Value" plan (Diamond)
  const [activePlanId, setActivePlanId] = useState('diamond');
  const activePlan = plans.find(p => p.id === activePlanId);

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-grid">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 mb-12 lg:mb-0">
            {/* Added -mt-8 as requested by user */}
            <div className="max-w-2xl -mt-8">
              <h4 className="pricing-eyebrow">
                Pricing
              </h4>

              <h2 className="pricing-title">
                Simple, Transparent Pricing
              </h2>
              <p className="pricing-description">
                Choose the plan that fits your family's needs. No hidden fees, cancel anytime.
              </p>

              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="feature-row">
                  <div className="feature-icon-box bg-purple-500/10 border-purple-500/20 text-[#BB86FC]">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="feature-title">
                      Family First
                    </h3>
                    <p className="feature-desc">
                      Scale from a single device to covering the whole household easily.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="feature-row">
                  <div className="feature-icon-box bg-teal-500/10 border-teal-500/20 text-[#03DAC6]">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="feature-title">
                      Instant Updates
                    </h3>
                    <p className="feature-desc">
                      Real-time data synchronization ensuring you never miss a moment.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="feature-row">
                  <div className="feature-icon-box bg-blue-500/10 border-blue-500/20 text-blue-400">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="feature-title">
                      Total Security
                    </h3>
                    <p className="feature-desc">
                      Enterprise-grade encryption keeps your family's data private and secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Card */}
          <div className="lg:col-span-5">

            {/* Tab Switcher */}
            <div className="tab-group">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  // Fix: Prevent state update if clicking the already active plan
                  onClick={() => {
                    if (activePlanId !== plan.id) {
                      setActivePlanId(plan.id);
                    }
                  }}
                  className="tab-button"
                  style={{
                    color: activePlanId === plan.id ? '#0C0E12' : '#9CA3AF',
                    backgroundColor: activePlanId === plan.id ? plan.color : 'transparent',
                  }}
                >
                  {plan.name}

                  {/* Arrow Annotation for Best Value (Diamond Plan) */}
                  {plan.id === 'diamond' && (
                    <div className="arrow-annotation">
                      <span className="arrow-text">
                        Best Value!
                      </span>
                      {/* SVG Flipped Horizontally (scale-x-[-1]) to point LEFT at the button */}
                      <svg
                        width="50"
                        height="40"
                        viewBox="0 0 45 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow-svg scale-x-[-1] rotate-[15deg] -mt-1"
                      >
                        <path
                          d="M10 5 C 15 20, 25 25, 35 30"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                        />
                        <path
                          d="M35 30 L 26 28 M 35 30 L 32 22"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Pricing Card Box */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={activePlan.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="pricing-card-container"
              >
                {/* Badge */}
                {activePlan.popular && (
                  <div
                    className="popular-badge-inner"
                    style={{ backgroundColor: activePlan.color }}
                  >
                    Best Value
                  </div>
                )}

                <div className="card-content">
                  <div className="flex flex-col gap-1">
                    <h3
                      className="plan-name"
                      style={{ color: activePlan.color }}
                    >
                      {activePlan.name} Plan
                    </h3>
                    <p className="plan-desc">
                      {activePlan.description}
                    </p>
                  </div>

                  <div className="price-wrapper">
                    <span className="price-amount">
                      ₹{activePlan.price}
                    </span>
                    <span className="price-period">/{activePlan.period}</span>
                  </div>

                  {/* REVERTED: Plain text for "Cancel anytime" */}
                  <p className="price-subtext">
                    {activePlan.billingNote ? activePlan.billingNote : 'Cancel anytime'}
                  </p>

                  <div className="card-features">
                    <h4 className="card-features-title">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {activePlan.features.map((feature, i) => (
                        <li key={i} className="card-feature-item">
                          <div className="flex-shrink-0 mt-0.5">
                            <Check
                              className="h-4 w-4"
                              style={{ color: activePlan.color }}
                            />
                          </div>
                          <span className="card-feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="action-button-wrapper">
                    <button
                      className="action-button group"
                      style={{
                        backgroundColor: activePlan.color,
                        boxShadow: `0 4px 20px -5px ${activePlan.color}40`
                      }}
                    >
                      {activePlan.buttonText}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;