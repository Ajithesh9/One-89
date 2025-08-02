import { FiMail } from 'react-icons/fi';
import { FaGooglePlay, FaTelegramPlane } from 'react-icons/fa';
import '../Footer.css';

const Footer = ({ onPrivacyClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social & Contact Links */}
        <div className="social-links">
          <a
            href="https://play.google.com/store/apps/details?id=com.deku.watcher"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Play Store"
            className="social-link"
          >
            <FaGooglePlay size={24} />
          </a>
          <a
            href="#" // Placeholder link for Telegram
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="social-link"
          >
            <FaTelegramPlane size={24} />
          </a>
          <a
            href="mailto:support@one89.in"
            aria-label="Email Support"
            className="social-link"
          >
            <FiMail size={24} />
          </a>
        </div>

        {/* Legal Link - Terms of Service Removed */}
        <div className="legal-links">
          <button onClick={onPrivacyClick} className="privacy-button">
            Privacy Policy
          </button>
        </div>

        <p>© {currentYear} One89. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;