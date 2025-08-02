import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import '../FAQ.css';

const faqData = [
  {
    question: 'Is it legal to use this application?',
    answer:
      'Our application is designed for legal use cases, such as monitoring systems you own or have explicit permission to monitor. It is the user\'s responsibility to comply with all applicable local, state, and federal laws.',
  },
  {
    question: 'How is my data protected?',
    answer:
      'We prioritize your security. All data transmitted between devices is secured with end-to-end encryption. We adhere to strict privacy policies and do not sell or share your data with third parties.',
  },
  {
    question: 'What devices are compatible?',
    answer:
      'The application is compatible with a wide range of modern Android devices. For specific version requirements, please refer to our detailed documentation page.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer:
      'Yes, you have complete control over your subscription. You can cancel at any time directly from your account dashboard. Your service will remain active until the end of the current billing period.',
  },
  {
    question: 'How do I install the app on the target device?',
    answer:
      'Installation requires physical access to the target device. Our setup process is guided and straightforward, taking only a few minutes. A step-by-step guide is provided after you sign up.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2>
            Frequently Asked Questions
          </h2>
          <p>
            Have questions? We're here to help.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question-button"
              >
                <span className="faq-question-text">{item.question}</span>
                {activeIndex === index ? (
                  <FiMinus className="faq-icon faq-icon-minus" />
                ) : (
                  <FiPlus className="faq-icon faq-icon-plus" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="faq-answer"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;