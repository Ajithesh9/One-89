import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FiPlay, FiArrowRight, FiCheck, FiClock, FiShield, FiMonitor, FiMessageCircle, FiHardDrive, FiActivity } from 'react-icons/fi';

const Hero = () => {
  const [deployStep, setDeployStep] = useState(0);
  
  const deploySteps = [
    { status: 'complete', time: '10:23:45', message: 'Monitoring agent initialized', detail: 'Connected to family network' },
    { status: 'complete', time: '10:23:46', message: 'Device discovery completed', detail: '4 devices detected' },
    { status: 'complete', time: '10:23:47', message: 'Content filters activated', detail: 'Safe Browse enabled' },
    { status: 'complete', time: '10:23:48', message: 'Screen time limits configured', detail: 'Age-appropriate restrictions applied' },
    { status: 'active', time: '10:23:49', message: 'Real-time monitoring active', detail: 'Protecting your family 24/7' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDeployStep((prev) => (prev < deploySteps.length - 1 ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"] 
  });

  // More impactful parallax effect (moves 60% of its height)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  
  // Sends the element behind the Features section at the end of the scroll
  const zIndex = useTransform(scrollYProgress, [0.95, 1], [10, -1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    // This outer container creates the scrollable area (180vh height)
    <div ref={targetRef} className="relative h-[180vh]">
      {/* This inner container sticks to the top and holds all the hero content */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)'
        }}>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(76, 230, 196, 0.1)' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(187, 134, 252, 0.08)', animationDelay: '1000ms' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(76, 230, 196, 0.05)', animationDelay: '2000ms' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 lg:pl-16"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight" style={{
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  letterSpacing: '-0.02em'
                }}>
                  Keep Your
                  <br />
                  <span style={{
                    background: 'linear-gradient(135deg, rgb(76, 230, 196) 0%, rgb(187, 134, 252) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                  }}>
                    Family Safe
                  </span>
                  <br />
                  Online
                </h1>
              </motion.div>
              
              {/* --- BADGE MOVED HERE --- */}
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{
                  background: 'rgba(76, 230, 196, 0.1)',
                  border: '1px solid rgba(76, 230, 196, 0.2)',
                  color: 'rgb(76, 230, 196)'
                }}>
                  <FiShield className="w-4 h-4" />
                  Trusted by 50,000+ families
                </div>
              </motion.div>

              <motion.p variants={itemVariants} className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Comprehensive parental monitoring and control. Set screen time limits, block inappropriate content, and monitor activity across all devices in real-time.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <button className="group flex items-center justify-center gap-3 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden" style={{
                  background: 'linear-gradient(135deg, rgb(76, 230, 196) 0%, rgb(187, 134, 252) 100%)',
                  boxShadow: '0 4px 20px rgba(76, 230, 196, 0.3)'
                }}>
                  <span>Get Started</span>
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group flex items-center justify-center gap-3 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold px-8 py-4 rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200 backdrop-blur-sm">
                  <FiPlay className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <FiActivity className="w-5 h-5" style={{color: 'rgb(76, 230, 196)'}} />
                  <span className="text-sm">Live Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiHardDrive className="w-5 h-5" style={{color: 'rgb(76, 230, 196)'}} />
                  <span className="text-sm">File & Data Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMessageCircle className="w-5 h-5" style={{color: 'rgb(76, 230, 196)'}} />
                  <span className="text-sm">Communication Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMonitor className="w-5 h-5" style={{color: 'rgb(76, 230, 196)'}} />
                  <span className="text-sm">Device Control</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ y, zIndex }}
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
                 <div className="bg-slate-800/80 border-b border-slate-700/50 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <h3 className="text-white font-semibold">Family Guardian Setup</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm" style={{color: 'rgb(76, 230, 196)'}}>
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{background: 'rgb(76, 230, 196)'}}></div>
                      <span>Live</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 h-96 overflow-hidden">
                  <div className="space-y-3 font-mono text-sm">
                    {deploySteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: index <= deployStep ? 1 : 0.3,
                          x: 0
                        }}
                        transition={{ delay: index * 0.5 }}
                        className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-500`}
                        style={{
                          background: index === deployStep && step.status === 'active'
                            ? 'rgba(187, 134, 252, 0.1)'
                            : index <= deployStep
                            ? 'rgba(76, 230, 196, 0.1)'
                            : 'rgba(51, 65, 85, 0.3)',
                          border: index === deployStep && step.status === 'active'
                            ? '1px solid rgba(187, 134, 252, 0.2)'
                            : index <= deployStep
                            ? '1px solid rgba(76, 230, 196, 0.1)'
                            : '1px solid transparent'
                        }}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          {index <= deployStep ? (
                            step.status === 'active' ? (
                              <div className="w-4 h-4 border-2 rounded-full animate-spin border-t-transparent" style={{
                                borderColor: 'rgba(187, 134, 252, 0.3)',
                                borderTopColor: 'transparent',
                                borderRightColor: 'rgb(187, 134, 252)',
                                borderBottomColor: 'rgb(187, 134, 252)',
                                borderLeftColor: 'rgb(187, 134, 252)'
                              }}></div>
                            ) : (
                              <FiCheck className="w-4 h-4" style={{color: 'rgb(76, 230, 196)'}} />
                            )
                          ) : (
                            <FiClock className="w-4 h-4 text-slate-500" />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs ${
                              index <= deployStep ? 'text-slate-300' : 'text-slate-500'
                            }`}>
                              {step.time}
                            </span>
                            <span className={`font-medium`} style={{
                              color: index === deployStep && step.status === 'active'
                                ? 'rgb(187, 134, 252)'
                                : index <= deployStep 
                                ? '#ffffff' 
                                : '#64748b'
                            }}>
                              {step.message}
                            </span>
                          </div>
                          <div className={`text-xs ${
                            index <= deployStep ? 'text-slate-400' : 'text-slate-600'
                          }`}>
                            {step.detail}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: deployStep >= deploySteps.length - 1 ? 1 : 0,
                      y: deployStep >= deploySteps.length - 1 ? 0 : 20
                    }}
                    className="mt-6 p-4 rounded-lg"
                    style={{
                      background: 'rgba(76, 230, 196, 0.1)',
                      border: '1px solid rgba(76, 230, 196, 0.2)'
                    }}
                  >
                    <div className="flex items-center gap-2 font-medium" style={{color: 'rgb(76, 230, 196)'}}>
                      <FiCheck className="w-5 h-5" />
                      <span>Family Guardian is now protecting your network</span>
                    </div>
                    <p className="text-sm mt-1" style={{color: 'rgba(76, 230, 196, 0.8)'}}>
                      All devices are monitored and content filters are active
                    </p>
                  </motion.div>
                </div>
                <div className="bg-slate-800/80 border-t border-slate-700/50 px-6 py-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">4</div>
                      <div className="text-xs text-slate-400">Devices Protected</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{color: 'rgb(187, 134, 252)'}}>24/7</div>
                      <div className="text-xs text-slate-400">Monitoring</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{color: 'rgb(76, 230, 196)'}}>100%</div>
                      <div className="text-xs text-slate-400">Coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
