import { FiMail } from 'react-icons/fi';
import { FaGooglePlay, FaTelegramPlane } from 'react-icons/fa';

const Footer = ({ onPrivacyClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-dark-onSurfaceSecondary">
        {/* Social & Contact Links */}
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="https://play.google.com/store/apps/details?id=com.deku.watcher"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Play Store"
            className="hover:text-dark-primary transition-colors"
          >
            <FaGooglePlay size={24} />
          </a>
          <a
            href="#" // Placeholder link for Telegram
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="hover:text-dark-primary transition-colors"
          >
            <FaTelegramPlane size={24} />
          </a>
          <a
            href="mailto:support@one89.in"
            aria-label="Email Support"
            className="hover:text-dark-primary transition-colors"
          >
            <FiMail size={24} />
          </a>
        </div>

        {/* Legal Link - Terms of Service Removed */}
        <div className="mb-4">
          <button onClick={onPrivacyClick} className="hover:text-dark-primary transition-colors">
            Privacy Policy
          </button>
        </div>

        <p>© {currentYear} One89. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;