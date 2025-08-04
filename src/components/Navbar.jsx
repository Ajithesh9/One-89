import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
// IMPORTANT: Make sure you have an 'eyes.png' file in your 'src/assets' folder.
import eyesLogo from '../assets/eyes.png';
import '../Navbar.css';

const navLinks = [
  { id: 'features', title: 'Features' },
  { id: 'pricing', title: 'Pricing' },
  { id: 'faq', title: 'FAQ' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const controls = useAnimation();
  const lastYPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentYPos = window.scrollY;

      if (menuOpen) {
        controls.start("visible");
        lastYPos.current = currentYPos;
        return;
      }

      if (currentYPos > lastYPos.current && currentYPos > 100) {
        controls.start("hidden");
      } else {
        controls.start("visible");
      }
      lastYPos.current = currentYPos;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, menuOpen]);

  const navbarVariants = {
    visible: { y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    hidden: { y: '-150%', transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      animate={controls}
      initial="visible"
      className="navbar" // Main positioning wrapper
    >
      <div className="navbar-content-wrapper"> {/* The visible pill container */}
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
              offset={-100} // Adjusted offset for new fixed position
              className="nav-link"
              activeClass="active"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* CTA Button and Mobile Menu Toggle */}
        <div className="navbar-actions">
          <button className="cta-button-desktop">
            Download
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-button">
            {menuOpen ? <FiX className="mobile-menu-icon" /> : <FiMenu className="mobile-menu-icon" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mobile-menu"
        >
          <div className="mobile-menu-content">
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
            <button className="mobile-cta-button">
              Download
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;