import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // load saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme;

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // adjust to your header height in px
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    closeMenu();
  };

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h3>Rohan Chavan</h3>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </nav>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="theme-btn"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
