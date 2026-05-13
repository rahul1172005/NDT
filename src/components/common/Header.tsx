import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Identity', href: '#about' },
    { name: 'Diagnostics', href: '#services' },
    { name: 'Fleet', href: '#equipment' },
    { name: 'Works', href: '#projects' },
    { name: 'Nodes', href: '#geography' },
    { name: 'Journal', href: '#blog' },
    { name: 'Audit', href: '#contact' },
  ];

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="/" style={{ fontFamily: 'var(--font-adieu)', letterSpacing: '-0.02em' }}>ZYRA<span>NDT</span></a>
        </div>

        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{ fontFamily: 'var(--font-adieu)' }}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-switcher" style={{ fontFamily: 'var(--font-adieu)', fontSize: '0.7rem' }}>
            <button className="active" style={{ fontFamily: 'inherit' }}>EN</button>
            <span style={{ opacity: 0.3 }}>/</span>
            <button style={{ fontFamily: 'inherit' }}>RU</button>
          </div>
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={() => setIsMenuOpen(false)} style={{ fontFamily: 'var(--font-adieu)' }}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
