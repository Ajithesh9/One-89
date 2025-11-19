// src/components/Navbar.jsx

import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import eyesLogo from "../assets/eyes.webp";
import "../Navbar.css";

const navLinks = [
  { id: "features", title: "Features" },
  { id: "howitworks", title: "How it works" },
  { id: "pricing", title: "Pricing" },
  { id: "faq", title: "FAQ" },
];

const Navbar = ({ onDownloadClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  const location = useLocation();
  const isPrivacyPage = location.pathname === "/privacy";

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isSolid ? "solid" : "faded"}`}>
      <div className="navbar-content-wrapper">
        {/* Logo (links to homepage) */}
        <RouterLink to="/" className="navbar-logo">
          <img src={eyesLogo} alt="One89 Logo" className="logo-image" />
        </RouterLink>

        {/* Conditional Menu/Title */}
        {isPrivacyPage ? (
          // 1. CHANGED: This is now an H1 tag for semantic correctness.
          // It has the same classes as before to look identical.
          <h1 className="text-white font-semibold text-base md:text-lg">
            Privacy Policy
          </h1>
        ) : (
          // On Main Page: Show the desktop menu
          <div className="desktop-menu">
            {navLinks.map((link) => (
              <ScrollLink
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
              </ScrollLink>
            ))}
          </div>
        )}

        {/* Conditional Actions/Spacer */}
        {isPrivacyPage ? (
          // On Privacy Page: Show an empty div to balance the logo
          <div className="w-[2.25rem] h-[2.25rem]"></div> // Empty spacer
        ) : (
          // On Main Page: Show the actions
          <div className="navbar-actions">
            <button className="cta-button-desktop" onClick={onDownloadClick}>
              Download
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-menu-button"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FiX className="mobile-menu-icon" />
              ) : (
                <FiMenu className="mobile-menu-icon" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Mobile menu only renders if NOT on the privacy page */}
      {!isPrivacyPage && (
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
                <ScrollLink
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
                </ScrollLink>
              ))}
              <button
                className="mobile-cta-button"
                onClick={() => {
                  setMenuOpen(false);
                  onDownloadClick();
                }}
              >
                Download App
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </nav>
  );
};

export default Navbar;
