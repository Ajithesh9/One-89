import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../assets/Logo'; // <-- 1. Import path is updated to point to the assets folder

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-surface/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="text-dark-onSurfaceSecondary hover:text-dark-primary transition-colors cursor-pointer font-medium"
                activeClass="text-dark-primary"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="bg-dark-primary text-dark-onPrimary font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 transition-all">
              Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-dark-onSurface text-2xl">
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
          className="md:hidden bg-dark-surface pb-4"
        >
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="text-dark-onSurfaceSecondary hover:text-dark-primary transition-colors cursor-pointer font-medium text-lg"
                activeClass="text-dark-primary"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <button className="bg-dark-primary text-dark-onPrimary font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all w-4/5">
              Download
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;