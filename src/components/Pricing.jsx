import { useState } from 'react';
import { Check, Zap, Users, Shield, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Pricing.css';

// Using colors strictly from Features.jsx capabilities
const plans = [
  {
    id: 'bronze',
    name: 'Bronze',
    price: '0',
    description: 'Essential monitoring for a single device.',
    features: [
      'Bind 1 Device',
      'Basic Features',
      'Device Monitoring',
      'Limited Control',
    ],
    popular: false,
    color: '#BB86FC', // Purple
    buttonText: 'Get Started Free'
  },
  {
    id: 'silver',
    name: 'Silver',
    price: '79',
    description: 'Advanced features for small families.',
    features: [
      'Bind up to 2 Devices',
      'All Silver Features',
      'Advanced Monitoring',
      'Full Device Control',
    ],
    popular: false,
    color: '#03DAC6', // Teal
    buttonText: 'Choose Silver'
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '149',
    description: 'Ultimate control for complete peace of mind.',
    features: [
      'Bind up to 5 Devices',
      'All Gold Features',
      'Ultimate Monitoring',
      'Ultimate Device Control',
    ],
    popular: true,
    color: '#FBBF24', // Gold/Yellow
    buttonText: 'Go for Gold'
  }
];

const Pricing = () => {
  const [activePlanId, setActivePlanId] = useState('gold');
  const activePlan = plans.find(p => p.id === activePlanId);

  return (
    <section id="pricing" className="bg-[#0C0E12] py-16 sm:py-20 relative overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-16 lg:items-center">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 mb-10 lg:mb-0">
            <div className="max-w-2xl">
              <h4 className="text-xs font-semibold text-[#BB86FC] mb-2 tracking-wide uppercase">
                Pricing
              </h4>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Choose the plan that fits your family's needs. No hidden fees, cancel anytime.
              </p>

              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-[#BB86FC]">
                      <Users className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Family First
                    </h3>
                    <p className="mt-1 text-gray-400 text-sm leading-relaxed">
                      Scale from a single device to covering the whole household easily.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 border border-teal-500/20 text-[#03DAC6]">
                      <Zap className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Instant Updates
                    </h3>
                    <p className="mt-1 text-gray-400 text-sm leading-relaxed">
                      Real-time data synchronization ensuring you never miss a moment.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Shield className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Total Security
                    </h3>
                    <p className="mt-1 text-gray-400 text-sm leading-relaxed">
                      Enterprise-grade encryption keeps your family's data private and secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Pricing Card */}
          <div className="lg:col-span-5">

            {/* Compact Tab Switcher */}
            <div className="flex p-1 mb-5 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 relative">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setActivePlanId(plan.id)}
                  className="flex-1 relative py-1.5 text-xs font-medium rounded-md transition-all duration-200 z-10"
                  style={{
                    color: activePlanId === plan.id ? '#0C0E12' : '#9CA3AF',
                    backgroundColor: activePlanId === plan.id ? plan.color : 'transparent',
                    fontWeight: activePlanId === plan.id ? 700 : 500
                  }}
                >
                  {plan.name}

                  {/* "Most Popular!" Arrow Annotation (Gold Tab) */}
                  {plan.id === 'gold' && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max flex flex-col items-center pointer-events-none z-50">
                      <span className="text-xs font-bold text-white rotate-[-6deg] mb-0.5 tracking-wide" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                        Most popular!
                      </span>
                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 45 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white rotate-[-6deg] drop-shadow-md opacity-90"
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

            {/* The Sleek Card */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={activePlan.id}
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-[#15171B] shadow-xl shadow-black/50"
              >
                {/* Inner Badge */}
                {activePlan.popular && (
                  <div
                    className="absolute top-0 right-0 px-2.5 py-0.5 rounded-bl-lg text-[9px] font-bold uppercase tracking-wider text-[#121212]"
                    style={{ backgroundColor: activePlan.color }}
                  >
                    Best Value
                  </div>
                )}

                <div className="p-5 sm:p-6">
                  <div className="flex flex-col gap-0.5">
                    <h3
                      className="text-lg font-bold"
                      style={{ color: activePlan.color }}
                    >
                      {activePlan.name} Plan
                    </h3>
                    <p className="text-xs text-gray-400 leading-snug">
                      {activePlan.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      ₹{activePlan.price}
                    </span>
                    <span className="ml-1.5 text-xs font-medium text-gray-500">/month</span>
                  </div>
                  <p className="mt-0.5 text-[10px] text-gray-600">Billed monthly • Cancel anytime</p>

                  <div className="mt-5 pt-5 border-t border-white/5 space-y-3">
                    <h4 className="text-[10px] font-semibold text-gray-300 uppercase tracking-wider">
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {activePlan.features.map((feature, i) => (
                        <li key={i} className="flex gap-2.5 items-start">
                          <div className="flex-shrink-0 mt-0.5">
                            <Check
                              className="h-3.5 w-3.5"
                              style={{ color: activePlan.color }}
                            />
                          </div>
                          <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <button
                      className="w-full group flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold text-[#121212] transition-all duration-200 hover:brightness-110 focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0C0E12]"
                      style={{
                        backgroundColor: activePlan.color,
                        boxShadow: `0 4px 15px -4px ${activePlan.color}40`
                      }}
                    >
                      {activePlan.buttonText}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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