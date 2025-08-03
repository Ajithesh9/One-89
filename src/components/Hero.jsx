import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FiPlay, FiArrowRight, FiCheck, FiClock, FiShield, FiMonitor, FiMessageCircle, FiHardDrive, FiActivity, FiStar } from 'react-icons/fi';

const Hero = () => {
  const [deployStep, setDeployStep] = useState(0);
  
  const deploySteps = [
    { status: 'complete', time: '10:23:45', message: 'Monitoring agent initialized', detail: 'Connected to family network' },
    { status: 'complete', time: '10:23:46', message: 'Device discovery completed', detail: '4 devices detected' },
    { status: 'complete', time: '10:23:47', message: 'Content filters activated', detail: 'Safe browsing enabled' },
    { status: 'complete', time: '10:23:48', message: 'Screen time limits configured', detail: 'Age-appropriate restrictions applied' },
    { status: 'active', time: '10:23:49', message: 'Real-time monitoring active', detail: 'Protecting your family 24/7' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDeployStep((prev) => (prev < deploySteps.length - 1 ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Create a ref to the component we want to track for scrolling
  const targetRef = useRef(null);

  // useScroll hook to track the scroll progress of the targetRef
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Animate from when the start of the element hits the start of the viewport,
    // to when the end of the element hits the start of the viewport.
    offset: ["start start", "end start"] 
  });

  // Transform the scroll progress (0 to 1) into a vertical movement (y)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  
  // Transform the scroll progress to change the z-index at the very end of the scroll
  const zIndex = useTransform(scrollYProgress, [0.9, 1], [10, -1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    // Attach the ref to the main container of the Hero section
    <div ref={targetRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)'
    }}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{
          background: 'rgba(76, 230, 196, 0.1)'
        }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{
          background: 'rgba(187, 134, 252, 0.08)',
          animationDelay: '1000ms'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 rounded-full blur-3xl animate-pulse" style={{
          background: 'rgba(76, 230, 196, 0.05)',
          animationDelay: '2000ms'
        }}></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left side - Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 lg:pl-16"
            >
              <motion.div variants={itemVariants} className="space-y-6">
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
                  <div className="flex items-center gap-4">
                    <span>Online</span>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium" 
                      style={{
                        background: 'rgba(76, 230, 196, 0.12)',
                        border: '1px solid rgba(76, 230, 196, 0.25)',
                        color: 'rgb(76, 230, 196)',
                        fontSize: '0.75rem'
                      }}
                    >
                      <FiShield className="w-3 h-3" />
                      <span>Trusted by 50,000+ families</span>
                    </motion.div>
                  </div>
                </h1>
              </motion.div>

              <motion.p variants={itemVariants} className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Comprehensive parental monitoring and control. Set screen time limits, block inappropriate content, and monitor activity across all devices in real-time.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <button className="group flex items-center justify-center gap-3 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden" style={{
                  background: 'linear-gradient(135deg, rgb(76, 230, 196) 0%, rgb(187, 134, 252) 100%)',
                  boxShadow: '0 4px 20px rgba(76, 230, 196, 0.3)'
                }} onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 30px rgba(76, 230, 196, 0.4)';
                }} onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 4px 20px rgba(76, 230, 196, 0.3)';
                }}>
                  <span>Get Started</span>
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group flex items-center justify-center gap-3 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold px-8 py-4 rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-200 backdrop-blur-sm">
                  <FiPlay className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </motion.div>

              {/* Redesigned Feature Grid */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-teal-500/20 to-cyan-500/20 flex items-center justify-center border border-teal-500/30">
                      <FiActivity className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Live Monitoring</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Real-time activity tracking across all devices</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-violet-500/20 flex items-center justify-center border border-purple-500/30">
                      <FiHardDrive className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Smart Control</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Intelligent content filtering and access control</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center border border-blue-500/30">
                      <FiMessageCircle className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Communication</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Monitor messages and social interactions</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-500/20 flex items-center justify-center border border-emerald-500/30">
                      <FiMonitor className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Multi-Device</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Unified control across all family devices</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Interface Wrapper - APPLY ANIMATIONS HERE */}
            <motion.div
              style={{ y, zIndex }} // Apply the transformed styles
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
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

                {/* Deploy Log */}
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

                  {/* Success message */}
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

                {/* Footer stats */}
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