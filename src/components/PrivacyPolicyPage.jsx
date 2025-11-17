// src/components/PrivacyPolicyPage.jsx

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import '../PrivacyPolicyPage.css';

const policyTabs = [
  { id: 'privacy', name: 'Privacy Policy', color: '#BB86FC' },
  { id: 'eula', name: 'EULA Policy', color: '#03DAC6' },
  { id: 'payment', name: 'Payment Terms', color: '#FBBF24' },
  { id: 'security', name: 'Security Center', color: '#60A5FA' },
];

const PrivacyPolicyPage = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeColor = policyTabs.find(tab => tab.id === activeTab)?.color || '#BB86FC';

  const renderContent = () => {
    switch (activeTab) {
      case 'privacy':
        return <PrivacyPolicyContent color={activeColor} />;
      case 'eula':
        return <EulaContent color={activeColor} />;
      case 'payment':
        return <PaymentTermsContent color={activeColor} />;
      case 'security':
        return <SecurityCenterContent color={activeColor} />;
      default:
        return <PrivacyPolicyContent color={activeColor} />;
    }
  };

  return (
    <div className="privacy-page-container">
      <div className="privacy-page-card">
        
        {/* 1. MOVED: "Go Back" button is now inside the card */}
        <div className="privacy-page-header">
          <Link 
            to="/" 
            className="privacy-page-back-button"
            style={{ color: activeColor }}
          >
            <FiArrowLeft size={20} />
            <span>Go Back to Main Site</span>
          </Link>
        </div>

        {/* Tab Group */}
        <div className="privacy-page-tabs-wrapper">
          <div className="privacy-page-tab-group">
            {policyTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="privacy-page-tab-button"
                style={{
                  backgroundColor: activeTab === tab.id ? tab.color : 'transparent',
                  color: activeTab === tab.id ? '#0C0E12' : '#9CA3AF',
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="privacy-page-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// --- CONTENT COMPONENTS ---
// (No changes to these components, they remain the same)

const PrivacyPolicyContent = ({ color }) => (
  <>
    <p className="privacy-page-last-updated">This Privacy Policy was last changed on 4 Feb 2024</p>
    
    <h2 className="privacy-page-section-title" style={{ color: color }}>1. Who we are</h2>
    <p className="privacy-page-paragraph">One89. ("we", "us" or " our") respects your privacy and values the trust you place in us when you share your personal data with us. This privacy policy sets out how we collect, process, and use your personal data when you access and use our services, including the entire Watcher product line (collectively "Watcher"), our websites (<a href="https://www.one89.in/" className="privacy-page-link">www.one89.in</a>and all sub-domains under one89.in) and all services provided by us from time to time (collectively the "Services").</p>
    <p className="privacy-page-paragraph">By using our Services, you agree to this Privacy Policy and our Terms and Conditions. We are not responsible for any legal cases, and the end user is solely responsible for any consequences arising from the use of our Services.</p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>2. What data we collect...</h2>
    <p className="privacy-page-paragraph">We set out below the types of data we collect and the purposes for which we use them. It is important to note that all responsibilities regarding the data collected lie with the user. We are not responsible for any data leaks or misuse.</p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>3. How long we keep your data...</h2>
    <p className="privacy-page-paragraph">We do not store any data longer than necessary. Your personal data will be deleted after the expiration time, depending on factors such as whether you have an account with us or have interacted with us.</p>
    
    <h2 className="privacy-page-section-title" style={{ color: color }}>4. Sharing of your data...</h2>
    <p className="privacy-page-paragraph">We do not sell, lease, rent, or give away your personal data except under the circumstances set out below. It is important to note that we are not responsible for any legal cases arising from the sharing of your data.</p>
    <ul className="privacy-page-list">
      <li>We may share your personal data with other members of our group of companies so we can provide the best services across our group. They are bound to keep your information in accordance with this policy.</li>
      <li>We may also share your personal data with certain contractors or service providers.</li>
      <li>If we have obtained your explicit consent in advance.</li>
    </ul>
    <p className="privacy-page-paragraph">Your personal data may be shared if it is made anonymous and aggregated, as in such circumstances the anonymized data will cease to be personal data.</p>
    
    <h2 className="privacy-page-section-title" style={{ color: color }}>5. Your rights</h2>
    <p className="privacy-page-paragraph">You may have certain rights in relation to your personal data. We have listed below the rights you have over your personal data. It is important to note that users can access their data, and we are not responsible for any legal cases related to the exercise of these rights.</p>
    <p className="privacy-page-paragraph">You can exercise the above rights by contacting us at<a href="mailto:support@one89.in" className="privacy-page-contact-link">support@one89.in</a>.</p>
    
    <h2 className="privacy-page-section-title" style={{ color: color }}>6. Security</h2>
    <p className="privacy-page-paragraph">We are committed to keeping your personal data safe. We provide high data safety measures, and we are not responsible for any legal cases related to the security of your personal data.</p>
    
    <h2 className="privacy-page-section-title" style={{ color: color }}>7. Changes to the policy</h2>
    <p className="privacy-page-paragraph">This policy will be updated from time to time. We will inform you of the updated policy by providing (i) a prominent link on our websites and Services, and (ii) by other means as appropriate.</p>

    <h2 className="privacy-page-section-title" style={{ color: color }}>8. How to contact us</h2>
    <p>If you have any questions about this policy, please contact us at:<a href="mailto:support@one89.in" className="privacy-page-contact-link">support@one89.in</a>.</p>
  </>
);

const EulaContent = ({ color }) => (
  <>
    <p className="privacy-page-last-updated">This EULA was last changed on 1 Jan 2025</p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>1. End-User License Agreement</h2>
    <p className="privacy-page-paragraph">This is a binding legal agreement between you and One89. By installing, copying, or otherwise using the Watcher software, you agree to be bound by the terms of this EULA. If you do not agree, do not install or use the software.</p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>2. License Grant</h2>
    <p className="privacy-page-paragraph">We grant you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the application strictly in accordance with this agreement and your purchased subscription plan.</p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>3. Restrictions</h2>
    <p className="privacy-page-paragraph">You agree not to, and you will not permit others to:</p>
    <ul className="privacy-page-list">
      <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, or disclose the software.</li>
      <li>Modify, make derivative works of, disassemble, decrypt, reverse compile, or reverse engineer any part of the software.</li>
      <li>Use the software for any illegal or unauthorized purpose.</li>
    </ul>
  </>
);

const PaymentTermsContent = ({ color }) => (
  <>
    <p className="privacy-page-last-updated">These Payment Terms were last changed on 1 Jan 2025</p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>1. Subscriptions</h2>
    <p className="privacy-page-paragraph">All our services are offered on a subscription basis. By purchasing a subscription, you agree to an initial and recurring periodic subscription fee at the then-current subscription rate, and you accept responsibility for all recurring charges until you cancel your subscription.</p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>2. Automatic Renewal</h2>
    <p className="privacy-page-paragraph">Your subscription will be automatically renewed for successive periods of the same duration as the subscription term originally selected. To cancel, you must do so from your account dashboard before the renewal date. No refunds will be provided for partial subscription periods.</p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>3. Cancellations & Refunds</h2>
    <p className="privacy-page-paragraph">You may cancel your subscription at any time. Your access will continue until the end of your current billing cycle. All purchases are final and non-refundable, except at our sole discretion and in accordance with applicable laws.</p>
  </>
);

const SecurityCenterContent = ({ color }) => (
  <>
    <p className="privacy-page-last-updated">This Security Policy was last changed on 1 Jan 2025</p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>1. Our Commitment</h2>
    <p className="privacy-page-paragraph">One89 is committed to protecting your data. We employ industry-standard security measures to ensure the confidentiality, integrity, and availability of the data you entrust to us.</p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>2. Data Encryption</h2>
    <p className="privacy-page-paragraph">All data transmitted between your devices and our servers is encrypted using 256-bit SSL (Secure Sockets Layer). Data at rest on our servers is encrypted using the AES-256 standard.</p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>3. Access Control</h2>
    <p className="privacy-page-paragraph">Your account is protected by a password you create. We use secure hashing algorithms to store your password, and it is never stored in plain text. Access to sensitive data by our employees is strictly limited on a need-to-know basis and is logged and audited.</p>
    <h2 className="privacy-page-section-title" style={{ color: color }}>4. User Responsibility</h2>
    <p className="privacy-page-paragraph">You are solely responsible for maintaining the security of your account credentials and for all activity that occurs under your account. You must also comply with all local, state, and federal laws regarding the monitoring of a device you do not own or do not have the proper consent to monitor.</p>
  </>
);

export default PrivacyPolicyPage;