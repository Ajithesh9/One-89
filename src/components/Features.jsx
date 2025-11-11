import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  // Category Icons
  Shield, MessageSquare, FileText, Camera, Cpu,
  // Feature Icons
  AppWindow, Image as ImageIcon, Volume2, ShieldAlert, Sliders, SunDim, ImagePlus, Lock,
  PhoneCall, PhoneOutgoing, Users, Bell, Send,
  GalleryHorizontal, Download, ImageDown, Trash2, FileX,
  Mic, MapPin, Info, Navigation,
  // UI Icons
  Image as PlaceholderIcon, ChevronLeft, ChevronRight
} from 'lucide-react';
import '../Features.css';

// --- Data ---
const featureCategories = [
  {
    id: 'device-control',
    category: 'Control',
    description: 'Full device command center.',
    icon: Shield,
    color: '#BB86FC',
    features: [
      { name: 'Monitor Apps', icon: AppWindow },
      { name: 'View Wallpapers', icon: ImageIcon },
      { name: 'Monitor Volume', icon: Volume2 },
      { name: 'Control Apps', icon: ShieldAlert },
      { name: 'Control Volume', icon: Sliders },
      { name: 'Control Brightness', icon: SunDim },
      { name: 'Set Wallpaper', icon: ImagePlus },
      { name: 'Lock Mobile', icon: Lock },
    ],
  },
  {
    id: 'communication',
    category: 'Connect',
    description: 'Calls, messages & contacts.',
    icon: MessageSquare,
    color: '#03DAC6',
    features: [
      { name: 'Call History', icon: PhoneCall },
      { name: 'Make Calls', icon: PhoneOutgoing },
      { name: 'Contacts List', icon: Users },
      { name: 'Notifications', icon: Bell },
      { name: 'Read Messages', icon: MessageSquare },
      { name: 'Send Messages', icon: Send },
    ],
  },
  {
    id: 'files',
    category: 'Files',
    description: 'Remote file explorer.',
    icon: FileText,
    color: '#60A5FA',
    features: [
      { name: 'Image Gallery', icon: GalleryHorizontal },
      { name: 'Download Files', icon: Download },
      { name: 'Download Images', icon: ImageDown },
      { name: 'Delete Files', icon: Trash2 },
      { name: 'Delete Images', icon: FileX },
    ],
  },
  {
    id: 'live',
    category: 'Live',
    description: 'Real-time surveillance.',
    icon: Camera,
    color: '#F43F5E',
    features: [
      { name: 'Remote Camera', icon: Camera },
      { name: 'One-Way Audio', icon: Mic },
      { name: 'Live Location', icon: MapPin },
    ],
  },
  {
    id: 'utils',
    category: 'Utils',
    description: 'Device status & tracking.',
    icon: Cpu,
    color: '#FBBF24',
    features: [
      { name: 'Device Info', icon: Info },
      { name: 'GPS Tracking', icon: Navigation },
    ],
  },
];

// --- Sub-Components ---

// 1. Selection Pill
const FeaturePill = ({ item, isActive, onClick }) => {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 outline-none ${isActive
        ? 'text-black font-semibold shadow-md'
        : 'text-gray-400 hover:text-white hover:bg-white/5'
        }`}
      style={{
        backgroundColor: isActive ? item.color : 'transparent',
      }}
    >
      <Icon size={16} />
      <span>{item.category}</span>
    </button>
  );
};

// 2. Feature Item
const FeatureItem = ({ feature, color }) => {
  const Icon = feature.icon;
  return (
    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/30 border border-white/5 hover:border-white/10 transition-colors group">
      <div
        className="p-2 rounded-lg bg-[#1E1E1E] transition-transform"
        style={{ color: color }}
      >
        <Icon size={18} />
      </div>
      <span className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors">
        {feature.name}
      </span>
    </div>
  );
};

// 3. Image Placeholder (Seamless design - no border, no bg)
const ImagePlaceholder = ({ color }) => (
  <div className="w-full h-full min-h-[320px] md:min-h-full flex items-center justify-center p-6">
    <div
      className="w-full h-full mx-auto rounded-2xl flex flex-col items-center justify-center gap-4 transition-colors duration-300 p-4"
    >
      <div className="p-4 rounded-full bg-white/5">
        <PlaceholderIcon size={32} className="opacity-50" style={{ color: color }} />
      </div>
      <div className="text-center">
        <p className="text-gray-300 font-medium text-sm">Live Preview</p>
        <p className="text-xs text-gray-500 mt-1">Interactive Demo</p>
      </div>
    </div>
  </div>
);

// --- Main Component ---

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Navigation Handlers
  const navigateCategory = (newIndex) => {
    if (newIndex === activeIndex) return;
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const nextCategory = () => {
    const newIndex = activeIndex === featureCategories.length - 1 ? 0 : activeIndex + 1;
    navigateCategory(newIndex);
  };

  const prevCategory = () => {
    const newIndex = activeIndex === 0 ? featureCategories.length - 1 : activeIndex - 1;
    navigateCategory(newIndex);
  };

  const activeCategory = featureCategories[activeIndex];

  // Slide Animation
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: (direction) => ({
      x: direction < 0 ? 30 : -30,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeIn' }
    })
  };

  return (
    <section id="features" className="py-16 bg-[#121212] flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl px-4 flex flex-col items-center gap-8">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Powerful Capabilities
          </h2>
          <p className="text-gray-400">
            A full overview of our comprehensive monitoring toolset.
          </p>
        </div>

        {/* Top Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 bg-[#1E1E1E] p-2 rounded-full border border-white/5 shadow-xl">
          {featureCategories.map((item, index) => (
            <FeaturePill
              key={item.id}
              item={item}
              isActive={index === activeIndex}
              onClick={() => navigateCategory(index)}
            />
          ))}
        </div>

        {/* Main Content Area + Nav Buttons */}
        <div className="w-full flex items-center justify-center gap-2 md:gap-4 max-w-5xl">

          {/* Previous Arrow */}
          <button
            onClick={prevCategory}
            className="p-3 rounded-full text-gray-600 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Previous Category"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Main Card */}
          <div className="flex-1 max-w-4xl relative">
            <div
              className="w-full bg-[#1E1E1E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
              style={{ minHeight: '400px' }} // Sleek, reduced height
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeCategory.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full flex flex-col md:flex-row"
                >

                  {/* Left Column: Features (No right border) */}
                  <div className="w-full md:w-7/12 p-5 md:p-6 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <activeCategory.icon
                          className="opacity-90"
                          style={{ color: activeCategory.color }}
                          size={24}
                        />
                        {activeCategory.category}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {activeCategory.description}
                      </p>
                    </div>

                    {/* 2-Column Grid */}
                    <div className="grid grid-cols-2 gap-x-3 gap-y-3 content-start">
                      {activeCategory.features.map((feature) => (
                        <FeatureItem
                          key={feature.name}
                          feature={feature}
                          color={activeCategory.color}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Image (Seamless) */}
                  <div className="w-full md:w-5/12 h-full">
                    <ImagePlaceholder color={activeCategory.color} />
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextCategory}
            className="p-3 rounded-full text-gray-600 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Next Category"
          >
            <ChevronRight size={32} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Features;