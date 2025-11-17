// src/App.jsx

import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import DownloadModal from './components/DownloadModal';
import { BackToTopButton } from './components/BackToTopButton'; 

// Create a component for your main page layout
const MainLayout = ({ onDownloadClick }) => (
  <>
    <Hero onDownloadClick={onDownloadClick} />
    <Features />
    <HowItWorks />
    <Pricing />
    <FAQ />
  </>
);

function App() {
  const [isDownloadModalOpen, setDownloadModalOpen] = useState(false);
  const lenisRef = useRef(null);
  const location = useLocation();

  const openDownloadModal = () => setDownloadModalOpen(true);
  const closeDownloadModal = () => setDownloadModalOpen(false);

  useEffect(() => {
    // ... (Lenis initialization code remains the same)
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (lenisRef.current) {
      window.lenis = lenisRef.current;
    }

    return () => {
      lenisRef.current?.destroy();
      if (window.lenis) {
        delete window.lenis;
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    // ... (Modal scroll management code remains the same)
    if (lenisRef.current) {
      if (isDownloadModalOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [isDownloadModalOpen]);

  return (
    <div className="bg-dark-background min-h-screen text-dark-onSurface">
      <Navbar onDownloadClick={openDownloadModal} />

      <main>
        <Routes>
          <Route 
            path="/" 
            element={<MainLayout onDownloadClick={openDownloadModal} />} 
          />
          <Route 
            path="/privacypolicy" 
            element={<PrivacyPolicyPage />} 
          />
        </Routes>
      </main>
      
      <Footer />

      <AnimatePresence>
        {isDownloadModalOpen && <DownloadModal onClose={closeDownloadModal} />}
      </AnimatePresence>

      {/* THIS IS THE FIX:
        The button is now rendered permanently. It will handle its
        own show/hide logic (including fade-out) internally.
        This removes the "flashing" and fixes the exit animation.
      */}
      <BackToTopButton />
    </div>
  );
}

// ... (All exported scroll functions remain the same)
export const scrollToElement = (selector, offset = 0) => {
  // ...
};

export const scrollToTop = () => {
  if (window.lenis) {
    window.lenis.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

export const scrollBy = (pixels) => {
  // ...
};

export const getCurrentScroll = () => {
  // ...
};

export default App;