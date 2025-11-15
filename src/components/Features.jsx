import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  // Device
  AppWindow, Image as ImageIcon, Volume2, Sun, Lock,
  // Comm
  Phone, PhoneCall, Contact, Bell, MessageSquare, Send, Mic2, MessageCircle,
  // Files
  GalleryHorizontal, Download, ImageDown, Trash2, ImageMinus,
  // Live
  Camera, Mic, MapPin, Activity, Keyboard, Ban,
  // Utils
  Cpu, Navigation,
} from 'lucide-react';

import locationMockup from '../assets/location-mockup.png';
import chatMockup from '../assets/chat-mockup.png';
import appMockup from '../assets/device-control.png';
import galleryMockup from '../assets/gallery-images.png';
import infoMockup from '../assets/utility.png';

import '../Features.css';

const featuresData = [
  {
    id: 'device',
    category: "Device Control",
    color: "#BB86FC",
    description: "Full control over the device's core functions and applications.",
    image: appMockup,
    imageScale: 1.26,       // Desktop Zoom
    mobileImageScale: 1.1,  // Mobile Zoom (Adjusted)
    items: [
      { name: "Device Apps", icon: AppWindow },
      { name: "Device Wallpaper", icon: ImageIcon },
      { name: "Device Volume", icon: Volume2 },
      { name: "Device Brightness", icon: Sun },
      { name: "Lock Device", icon: Lock },
    ]
  },
  {
    id: 'comm',
    category: "Communication",
    color: "#03DAC6",
    description: "Comprehensive logs of all calls, messages, and social interactions.",
    image: chatMockup,
    imageScale: 1.18,       // Desktop Zoom
    mobileImageScale: 1.05, // Mobile Zoom (Adjusted)
    items: [
      { name: "Call History", icon: Phone },
      { name: "Make Calls", icon: PhoneCall },
      { name: "Device Contacts", icon: Contact },
      { name: "Live Notifications", icon: Bell },
      { name: "Read Messages", icon: MessageSquare },
      { name: "Send Messages", icon: Send },
      { name: "Call Recording", icon: Mic2 },
      { name: "Social Media Chats", icon: MessageCircle },
    ]
  },
  {
    id: 'files',
    category: "Data Access",
    color: "#60A5FA",
    description: "Access, download, and manage files stored on the device.",
    image: galleryMockup,
    imageScale: 1.1,        // Desktop Zoom
    mobileImageScale: 1.0,  // Mobile Zoom (Adjusted)
    items: [
      { name: "Image Gallery", icon: GalleryHorizontal },
      { name: "Download Files", icon: Download },
      { name: "Download Images", icon: ImageDown },
      { name: "Delete Files", icon: Trash2 },
      { name: "Delete Images", icon: ImageMinus },
    ]
  },
  {
    id: 'live',
    category: "Live Monitoring",
    color: "#F43F5E",
    description: "Real-time surveillance of the device's surroundings and activity.",
    image: locationMockup,
    imageScale: 1.45,       // Desktop Zoom
    mobileImageScale: 1.3,  // Mobile Zoom (Adjusted)
    items: [
      { name: "Remote Camera", icon: Camera },
      { name: "One-Way Audio", icon: Mic },
      { name: "Live Location", icon: MapPin },
      { name: "Live Call Monitoring", icon: Activity },
      { name: "Live Type Monitoring", icon: Keyboard },
      { name: "Geofencing", icon: Ban },
    ]
  },
  {
    id: 'utils',
    category: "Utilities",
    color: "#FBBF24",
    description: "Essential tracking and system information.",
    image: infoMockup,
    imageScale: 1.5,        // Desktop Zoom
    mobileImageScale: 1.2,  // Mobile Zoom (Adjusted)
    items: [
      { name: "Device Information", icon: Cpu },
      { name: "Device Location", icon: Navigation },
    ]
  }
];

// Moved VisualContent outside to prevent re-creation on every render
const VisualContent = ({ category, isMobile }) => {
  // Select the appropriate scale based on the isMobile prop
  const scale = isMobile
    ? (category.mobileImageScale || 1)
    : (category.imageScale || 1);

  return (
    <div
      className="visual-content"
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <img
        src={category.image}
        alt={category.category}
        className="visual-image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          // Apply the dynamic scale here
          transform: `scale(${scale})`,
          transition: 'transform 0.3s ease'
        }}
      />
      <div
        className="visual-glow"
        style={{
          backgroundColor: category.color,
          width: '60%',
          height: '60%'
        }}
      ></div>
    </div>
  );
};

const Features = () => {
  const [activeTabId, setActiveTabId] = useState('device');
  const activeCategory = featuresData.find(cat => cat.id === activeTabId);

  return (
    <section id="features" className="features-section">
      <div className="features-container">

        <div className="features-header">
          <h4 className="features-eyebrow">Capabilities</h4>
          <h2 className="features-title">
            Complete Control
          </h2>
          <p className="features-subtitle">
            Everything you need to keep them safe, all in one place.
          </p>
        </div>

        {/* Tabs */}
        <div className="features-tabs-wrapper">
          <div className="features-tab-group">
            {featuresData.map((cat) => {
              const isActive = activeTabId === cat.id;
              return (
                <button
                  key={cat.id}
                  // Fix: Prevent state update if clicking the already active tab
                  onClick={() => {
                    if (activeTabId !== cat.id) {
                      setActiveTabId(cat.id);
                    }
                  }}
                  className="features-tab-button"
                  style={{
                    backgroundColor: isActive ? cat.color : 'transparent',
                    color: isActive ? '#121212' : '#9CA3AF',
                  }}
                >
                  {cat.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Display Card */}
        <div className="features-card-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="feature-display-card"
            >

              {/* --- DESKTOP VISUAL (Left Column) --- */}
              {/* Hidden on Mobile */}
              <div className="feature-card-visual desktop-visual" style={{ padding: 0 }}>
                <VisualContent category={activeCategory} isMobile={false} />
              </div>

              {/* --- RIGHT CONTENT COLUMN --- */}
              <div className="feature-card-content">

                {/* MOBILE WRAPPER: Image + Header */}
                {/* This wrapper becomes the "Card" on mobile */}
                <div className="mobile-card-wrapper">

                  {/* --- MOBILE VISUAL (Top of Card) --- */}
                  {/* Hidden on Desktop */}
                  <div className="feature-card-visual mobile-visual" style={{ padding: 0 }}>
                    <VisualContent category={activeCategory} isMobile={true} />
                  </div>

                  <div className="content-header-fixed">
                    <h3 className="content-title" style={{ color: activeCategory.color }}>
                      {activeCategory.category}
                    </h3>
                    <p className="content-desc">
                      {activeCategory.description}
                    </p>
                  </div>
                </div>

                {/* GRID (Sibling to Mobile Card Wrapper) */}
                {/* Sits outside the "Card" style on mobile */}
                <div className="features-grid-wrapper">
                  <div className="features-grid-list">
                    {activeCategory.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.name} className="grid-item group">
                          <div className="grid-icon-box" style={{ color: activeCategory.color }}>
                            <Icon size={20} strokeWidth={2} />
                          </div>
                          <span className="grid-text">{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Features;