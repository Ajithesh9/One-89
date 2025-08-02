import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/Logo'; // <-- 1. Import path is updated to point to the assets folder
import '../Navbar.css';

const navLinks = [
  { id: 'features', title: 'Features' },
  { id: 'pricing', title: 'Pricing' },
  { id: 'faq', title: 'FAQ' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <div className="navbar-content">
          
          {/* Logo */}
          <div className="navbar-logo">
            <Logo />
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
                offset={-70}
                className="nav-link"
                activeClass="active"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="cta-button-desktop">
            <button className="cta-button">
              Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-icon">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
                offset={-70}
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