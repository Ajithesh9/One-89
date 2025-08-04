import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';

function App() {
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const lenisRef = useRef(null);

  const openPrivacyModal = () => setPrivacyModalOpen(true);
  const closePrivacyModal = () => setPrivacyModalOpen(false);

  useEffect(() => {
    // ================================================================
    // LENIS SMOOTH SCROLL CONFIGURATION
    // ================================================================
    
    lenisRef.current = new Lenis({
      // DURATION: Controls scroll animation duration
      // Range: 0.5-2.0 (1.2 = smooth, 0.8 = snappy, 1.8 = cinematic)
      duration: 1.2,
      
      // EASING: Controls scroll curve feeling
      // Current: Smooth exponential easing for premium feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      
      // DIRECTION: Scroll direction
      direction: 'vertical',
      
      // GESTUREDIRECTION: Mouse wheel direction
      gestureDirection: 'vertical',
      
      // SMOOTH: Enable/disable smooth scrolling
      smooth: true,
      
      // SMOOTHTOUCH: Disable on mobile for better performance
      // Native mobile scroll feels better on touch devices
      smoothTouch: false,
      
      // TOUCHMULTIPLIER: Touch scroll sensitivity
      touchMultiplier: 2,
      
      // INFINITE: Disable infinite scroll
      infinite: false,
    });

    // ================================================================
    // ANIMATION FRAME LOOP - Essential for smooth performance
    // ================================================================
    
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // ================================================================
    // GLOBAL ACCESS - For programmatic scroll control
    // ================================================================
    
    if (lenisRef.current) {
      window.lenis = lenisRef.current;
    }

    // ================================================================
    // CLEANUP - Prevent memory leaks
    // ================================================================
    
    return () => {
      lenisRef.current?.destroy();
      if (window.lenis) {
        delete window.lenis;
      }
    };
  }, []);

  // ================================================================
  // MODAL SCROLL MANAGEMENT
  // When modal opens, stop smooth scroll to prevent conflicts
  // ================================================================
  
  useEffect(() => {
    if (lenisRef.current) {
      if (isPrivacyModalOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [isPrivacyModalOpen]);

  return (
    <div className="bg-dark-background min-h-screen text-dark-onSurface">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer onPrivacyClick={openPrivacyModal} />

      <AnimatePresence>
        {isPrivacyModalOpen && <PrivacyModal onClose={closePrivacyModal} />}
      </AnimatePresence>
    </div>
  );
}

// ================================================================
// UTILITY FUNCTIONS - Use these anywhere in your app
// ================================================================

// Smooth scroll to element by selector
export const scrollToElement = (selector, offset = 0) => {
  if (window.lenis) {
    const element = document.querySelector(selector);
    if (element) {
      window.lenis.scrollTo(element, { offset });
    }
  }
};

// Smooth scroll to top
export const scrollToTop = () => {
  if (window.lenis) {
    window.lenis.scrollTo(0);
  }
};

// Smooth scroll by pixels
export const scrollBy = (pixels) => {
  if (window.lenis) {
    window.lenis.scrollTo(window.lenis.scroll + pixels);
  }
};

// Get current scroll position
export const getCurrentScroll = () => {
  return window.lenis ? window.lenis.scroll : window.scrollY;
};

// Usage Examples:
// scrollToElement('#features', -100); // Scroll to features with 100px offset
// scrollToTop(); // Smooth scroll to top
// scrollBy(500); // Scroll down by 500px
// const currentPos = getCurrentScroll(); // Get current scroll position

export default App;