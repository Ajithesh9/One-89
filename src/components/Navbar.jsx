import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import eyesLogo from '../assets/eyes.png';
import '../Navbar.css';

const navLinks = [
  { id: 'features', title: 'Features' },
  { id: 'howitworks', title: 'How it works' },
  { id: 'pricing', title: 'Pricing' },
  { id: 'faq', title: 'FAQ' },
];

// Destructure the onDownloadClick prop here
const Navbar = ({ onDownloadClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isSolid ? 'solid' : 'faded'}`}>
      <div className="navbar-content-wrapper">

        {/* Logo */}
        <div className="navbar-logo">
          <img src={eyesLogo} alt="One89 Logo" className="logo-image" />
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className="nav-link"
              activeClass="active"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          {/* Desktop Download Button */}
          <button
            className="cta-button-desktop"
            onClick={onDownloadClick}
          >
            Download
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX className="mobile-menu-icon" /> : <FiMenu className="mobile-menu-icon" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mobile-menu-container"
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="mobile-nav-link"
                activeClass="active"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            {/* Mobile Download Button */}
            <button
              className="mobile-cta-button"
              onClick={() => {
                setMenuOpen(false); // Close menu when clicked
                onDownloadClick();  // Open modal
              }}
            >
              Download App
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;