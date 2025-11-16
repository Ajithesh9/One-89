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
import DownloadModal from './components/DownloadModal';

function App() {
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isDownloadModalOpen, setDownloadModalOpen] = useState(false);
  const lenisRef = useRef(null);

  const openPrivacyModal = () => setPrivacyModalOpen(true);
  const closePrivacyModal = () => setPrivacyModalOpen(false);

  const openDownloadModal = () => setDownloadModalOpen(true);
  const closeDownloadModal = () => setDownloadModalOpen(false);


  useEffect(() => {
    // ================================================================
    // LENIS SMOOTH SCROLL CONFIGURATION
    // ================================================================

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
  }, []);

  // ================================================================
  // MODAL SCROLL MANAGEMENT
  // ================================================================

  useEffect(() => {
    if (lenisRef.current) {
      if (isPrivacyModalOpen || isDownloadModalOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [isPrivacyModalOpen, isDownloadModalOpen]);

  return (
    <div className="bg-dark-background min-h-screen text-dark-onSurface">
      {/* Pass the download handler to Navbar */}
      <Navbar onDownloadClick={openDownloadModal} />

      <main>
        <Hero onDownloadClick={openDownloadModal} />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer onPrivacyClick={openPrivacyModal} />

      <AnimatePresence>
        {isPrivacyModalOpen && <PrivacyModal onClose={closePrivacyModal} />}
      </AnimatePresence>
      <AnimatePresence>
        {isDownloadModalOpen && <DownloadModal onClose={closeDownloadModal} />}
      </AnimatePresence>
    </div>
  );
}

export const scrollToElement = (selector, offset = 0) => {
  if (window.lenis) {
    const element = document.querySelector(selector);
    if (element) {
      window.lenis.scrollTo(element, { offset });
    }
  }
};

export const scrollToTop = () => {
  if (window.lenis) {
    window.lenis.scrollTo(0);
  }
};

export const scrollBy = (pixels) => {
  if (window.lenis) {
    window.lenis.scrollTo(window.lenis.scroll + pixels);
  }
};

export const getCurrentScroll = () => {
  return window.lenis ? window.lenis.scroll : window.scrollY;
};

export default App;