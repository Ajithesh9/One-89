import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Camera,
  Mic,
  FileText,
  MessageSquare,
  AppWindow,
  Lock
} from 'lucide-react';
// Ensure this points to src/Features.css
import '../Features.css';

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">

        {/* Section Header */}
        <div className="features-header">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="features-eyebrow"
          >
            Capabilities
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="features-title"
          >
            Everything you need to <br />
            <span className="text-gradient">stay in control.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="features-subtitle"
          >
            A complete suite of monitoring tools designed for peace of mind.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid">

          {/* Card 1: Live Monitoring (Large - 2x2) */}
          <motion.div
            className="bento-card col-span-1 md:col-span-2 row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bento-noise"></div>
            <div className="bento-content">
              <div className="bento-icon-box bg-red-500/20 text-red-400">
                <Camera size={24} />
              </div>
              <h3 className="bento-title">Live Surveillance</h3>
              <p className="bento-desc">Access device camera and microphone in real-time with zero latency.</p>

              {/* Visual: Camera UI Mockup */}
              <div className="bento-visual visual-camera">
                <div className="cam-rec-dot"></div>
                <div className="cam-frame">
                  <div className="cam-subject"></div>
                  <div className="cam-interface">
                    <span className="text-xs font-mono text-red-500">LIVE • 00:12:43</span>
                    <Mic size={14} className="text-white/70" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Location (Tall - 1x2) */}
          <motion.div
            className="bento-card col-span-1 row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bento-noise"></div>
            <div className="bento-content">
              <div className="bento-icon-box bg-blue-500/20 text-blue-400">
                <MapPin size={24} />
              </div>
              <h3 className="bento-title">Pinpoint Location</h3>
              <p className="bento-desc">GPS tracking with history and geofencing alerts.</p>

              {/* Visual: Map Mockup */}
              <div className="bento-visual visual-map">
                <div className="map-grid"></div>
                <div className="map-route"></div>
                <div className="map-pin">
                  <div className="map-pin-pulse"></div>
                  <div className="map-user-dot"></div>
                </div>
                <div className="map-card">
                  <span className="text-[10px] text-gray-400">Current Location</span>
                  <span className="text-xs font-bold text-white">Home</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: File Access (Wide - 2x1) */}
          <motion.div
            className="bento-card col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bento-noise"></div>
            <div className="bento-content flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="bento-icon-box bg-yellow-500/20 text-yellow-400 mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="bento-title">File Explorer</h3>
                <p className="bento-desc">Browse photos, videos, and documents stored on the device remotely.</p>
              </div>

              {/* Visual: File Grid */}
              <div className="bento-visual visual-files">
                <div className="file-item"></div>
                <div className="file-item"></div>
                <div className="file-item"></div>
                <div className="file-item selected">
                  <div className="check-badge">✓</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Social (Small - 1x1) */}
          <motion.div
            className="bento-card col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="bento-noise"></div>
            <div className="bento-content">
              <div className="bento-icon-box bg-green-500/20 text-green-400">
                <MessageSquare size={24} />
              </div>
              <h3 className="bento-title">Social Media</h3>
              <p className="bento-desc">Monitor WhatsApp, Instagram, and SMS chats.</p>
            </div>
          </motion.div>

          {/* Card 5: App Control (Small - 1x1) */}
          <motion.div
            className="bento-card col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="bento-noise"></div>
            <div className="bento-content">
              <div className="bento-icon-box bg-purple-500/20 text-purple-400">
                <AppWindow size={24} />
              </div>
              <h3 className="bento-title">App Blocking</h3>
              <p className="bento-desc">Restrict access to inappropriate applications.</p>
            </div>
          </motion.div>

          {/* Card 6: Stealth (Wide - 2x1) - FIXED to fill gap */}
          <motion.div
            className="bento-card col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="bento-noise"></div>
            <div className="bento-content">
              <div className="bento-icon-box bg-gray-500/20 text-gray-300">
                <Lock size={24} />
              </div>
              <h3 className="bento-title">Stealth Mode</h3>
              <p className="bento-desc">Operates completely invisibly in the background, leaving no trace on the target device.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;