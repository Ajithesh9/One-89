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
import phoneMockup from '../assets/phone-mockup.png';
import '../Features.css';

const featuresData = [
  {
    id: 'device',
    category: "Device Control",
    color: "#BB86FC",
    description: "Full control over the device's core functions and applications.",
    image: phoneMockup,
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
    image: phoneMockup,
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
    image: phoneMockup,
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
    image: phoneMockup,
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
    image: phoneMockup,
    items: [
      { name: "Device Information", icon: Cpu },
      { name: "Device Location", icon: Navigation },
    ]
  }
];

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
                  onClick={() => setActiveTabId(cat.id)}
                  className="features-tab-button"
                  style={{
                    // Match Pricing.jsx style: Solid background, Dark text on active
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
          {/* Matched to Pricing.jsx: 
             1. Added mode="wait" to prevent overlap glitch
             2. Added scale effect (0.98 -> 1 -> 0.98)
             3. Adjusted Y distance to match Pricing (10px)
          */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="feature-display-card"
            >

              {/* Left: Image */}
              <div className="feature-card-visual">
                <div className="visual-content">
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.category}
                    className="visual-image"
                  />
                  <div
                    className="visual-glow"
                    style={{ backgroundColor: activeCategory.color }}
                  ></div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="feature-card-content">
                <div className="content-header-fixed">
                  <h3 className="content-title" style={{ color: activeCategory.color }}>
                    {activeCategory.category}
                  </h3>
                  <p className="content-desc">
                    {activeCategory.description}
                  </p>
                </div>

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