import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  // Navigation
  ChevronLeft, ChevronRight,
  // Device Control
  AppWindow, Image as ImageIcon, Volume2, Sun, ShieldBan, VolumeX, SunDim, ImagePlus, Lock,
  // Communication
  Phone, PhoneOutgoing, Contact, Bell, MessageSquare, Send,
  // Files
  GalleryHorizontal, Download, ImageDown, FileMinus, ImageMinus,
  // Live
  Camera, Mic, MapPin,
  // Utilities
  Cpu, Navigation,
} from 'lucide-react';
import '../Features.css';

const featuresData = [
  {
    id: 'device',
    category: "Device Monitoring & Control",
    color: "#BB86FC", // Purple
    description: "Complete remote control over apps and hardware settings.",
    items: [
      { name: "Monitor Apps", icon: AppWindow },
      { name: "See Wallpapers", icon: ImageIcon },
      { name: "Monitor Volume", icon: Volume2 },
      { name: "Monitor Brightness", icon: Sun },
      { name: "Control Apps", icon: ShieldBan },
      { name: "Control Volume", icon: VolumeX },
      { name: "Control Brightness", icon: SunDim },
      { name: "Set Wallpaper", icon: ImagePlus },
      { name: "Lock Mobile", icon: Lock },
    ]
  },
  {
    id: 'comm',
    category: "Communication Monitoring",
    color: "#03DAC6", // Teal
    description: "Stay informed about who they talk to and what they say.",
    items: [
      { name: "Read Call History", icon: Phone },
      { name: "Create Calls", icon: PhoneOutgoing },
      { name: "Read Contacts", icon: Contact },
      { name: "Monitor Notifications", icon: Bell },
      { name: "Read Messages", icon: MessageSquare },
      { name: "Send Messages", icon: Send },
    ]
  },
  {
    id: 'files',
    category: "File & Data Access",
    color: "#60A5FA", // Blue
    description: "Browse, download, and manage stored media and documents.",
    items: [
      { name: "Image Gallery", icon: GalleryHorizontal },
      { name: "Download Files", icon: Download },
      { name: "Download Images", icon: ImageDown },
      { name: "Delete Files", icon: FileMinus },
      { name: "Delete Images", icon: ImageMinus },
    ]
  },
  {
    id: 'live',
    category: "Live Monitoring",
    color: "#F43F5E", // Red
    description: "Real-time audio and visual surveillance.",
    items: [
      { name: "Remote Camera", icon: Camera },
      { name: "One-Way Audio", icon: Mic },
      { name: "Live Location", icon: MapPin },
    ]
  },
  {
    id: 'utils',
    category: "Core Utilities",
    color: "#FBBF24", // Amber
    description: "Essential device information and tracking tools.",
    items: [
      { name: "Device Information", icon: Cpu },
      { name: "Device Location", icon: Navigation },
    ]
  }
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === featuresData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? featuresData.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentCategory = featuresData[currentIndex];

  // Animation variants
  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: (direction) => ({
      x: direction < 0 ? 20 : -20,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" }
    })
  };

  return (
    <section id="features" className="features-section">
      <div className="features-container">

        {/* Header */}
        <div className="features-header">
          <h4 className="features-eyebrow">Features</h4>
          <h2 className="features-title">
            Everything you need <br />
            <span className="text-gradient">in one place.</span>
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="carousel-wrapper">

          {/* Prev Button (Outside Card) */}
          <button onClick={prevSlide} className="nav-button prev-button" aria-label="Previous">
            <ChevronLeft size={28} />
          </button>

          {/* Main Content Card */}
          <div className="carousel-card-container">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="carousel-card"
              >
                {/* Left Side: Image Placeholder */}
                <div className="card-image-container">
                  <div
                    className="image-placeholder"
                    style={{ borderColor: `${currentCategory.color}40` }}
                  >
                    <div
                      className="placeholder-icon-box"
                      style={{ color: currentCategory.color }}
                    >
                      {React.createElement(currentCategory.items[0].icon, { size: 80, strokeWidth: 1 })}
                    </div>
                    <span className="placeholder-label" style={{ color: currentCategory.color }}>
                      {currentCategory.category}
                    </span>
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-category-title" style={{ color: currentCategory.color }}>
                      {currentCategory.category}
                    </h3>
                    <p className="card-category-desc">
                      {currentCategory.description}
                    </p>
                  </div>

                  <div className="card-features-grid">
                    {currentCategory.items.map((feature) => {
                      const Icon = feature.icon;
                      return (
                        <div key={feature.name} className="feature-list-item">
                          <div className="feature-icon-small" style={{ color: currentCategory.color }}>
                            <Icon size={20} />
                          </div>
                          <span className="feature-text">{feature.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button (Outside Card) */}
          <button onClick={nextSlide} className="nav-button next-button" aria-label="Next">
            <ChevronRight size={28} />
          </button>

        </div>

        {/* Dots Navigation */}
        <div className="carousel-dots">
          {featuresData.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => goToSlide(idx)}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              style={{
                backgroundColor: idx === currentIndex ? cat.color : undefined
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;