import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import '../FAQ.css';

const faqData = [
  { q: 'Is it legal to use this application?', a: 'Our application is intended for systems you own or have permission to monitor. You must comply with all relevant laws.' },
  { q: 'How is my data protected?', a: 'We use end-to-end encryption and strict privacy practices. Your data stays private.' },
  { q: 'What devices are compatible?', a: 'Supports modern Android devices (version 8.0+). See docs for full list.' },
  { q: 'Can I cancel my subscription anytime?', a: 'Yes—cancel from your dashboard at any point; access continues until billing cycle ends.' },
  { q: 'How do I install on the target device?', a: 'Requires physical access; follow our guided installer after signup for step-by-step help.' },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p className="subtitle">Clear answers at your fingertips.</p>
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className={`accordion-item ${active === idx ? 'open' : ''}`}
          >
            <div
              className="accordion-header"
              onClick={() => setActive(active === idx ? null : idx)}
            >
              <span className="accordion-title">{item.q}</span>
              {active === idx ? (
                <FiChevronUp className="accordion-icon" />
              ) : (
                <FiChevronDown className="accordion-icon" />
              )}
            </div>

            <div className={`accordion-content ${active === idx ? 'open' : ''}`}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;