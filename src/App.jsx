import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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

  const openPrivacyModal = () => setPrivacyModalOpen(true);
  const closePrivacyModal = () => setPrivacyModalOpen(false);

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

export default App;