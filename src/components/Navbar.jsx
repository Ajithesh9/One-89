import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import eyesLogo from '../assets/eyes.png';
import '../Navbar.css';

const navLinks = [
  { id: 'features', title: 'Features' },
  { id: 'howitworks', title: 'How it works' },
  { id: 'pricing', title: 'Pricing' },
  { id: 'faq', title: 'FAQ' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar to solid if scrolled more than 10px, otherwise it's faded
      setIsSolid(window.scrollY > 10);
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
    </nav>
  );
};

export default Navbar;