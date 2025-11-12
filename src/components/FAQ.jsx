import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import '../FAQ.css';

const faqData = [
  {
    q: 'Is it legal to use this application?',
    a: 'Our application is intended for systems you own or have permission to monitor. You must comply with all relevant laws.'
  },
  {
    q: 'How is my data protected?',
    a: 'We use end-to-end encryption and strict privacy practices. Your data stays private.'
  },
  {
    q: 'What devices are compatible?',
    a: 'Supports modern Android devices (version 8.0+). See docs for full list.'
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes—cancel from your dashboard at any point; access continues until billing cycle ends.'
  },
  {
    q: 'How do I install on the target device?',
    a: 'Requires physical access; follow our guided installer after signup for step-by-step help.'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleContactClick = (e) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo('#footer');
    } else {
      document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">

        {/* Header */}
        <div className="faq-header">
          <h2 className="faq-title">Frequently asked questions</h2>
          <p className="faq-subtitle">Everything you need to know about the product and billing.</p>
        </div>

        {/* List */}
        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="faq-trigger"
                >
                  {/* Icon with 45deg Rotation Animation */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                    className="faq-icon-wrapper"
                  >
                    <PlusCircle className="faq-icon-svg" />
                  </motion.span>

                  <span className="faq-question">{item.q}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faq-answer-wrapper"
                    >
                      <p className="faq-answer-text">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer / Still have questions */}
        <div className="faq-footer">
          <div className="faq-footer-content">
            <h3 className="faq-footer-title">Still have questions?</h3>
            <p className="faq-footer-text">
              Can’t find the answer you’re looking for? Please chat to our friendly team.
            </p>
            <button onClick={handleContactClick} className="faq-contact-button">
              Get in touch
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;