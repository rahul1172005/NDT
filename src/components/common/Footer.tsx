import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-industrial">
      <div className="container">
        
        {/* Large Brand Title */}
        <div className="footer-brand-title">
          <h2>ZYRA</h2>
        </div>

        {/* Nav columns */}
        <div className="footer-nav-grid">
          <div className="footer-nav-col">
            <span className="footer-col-label">NAVIGATION</span>
            <a href="#about" className="footer-nav-link">ABOUT_ARCHIVE</a>
            <a href="#services" className="footer-nav-link">DIAGNOSTIC_NODES</a>
            <a href="#equipment" className="footer-nav-link">HARDWARE_STACK</a>
            <a href="#projects" className="footer-nav-link">DEPLOYMENTS</a>
          </div>
          <div className="footer-nav-col">
            <span className="footer-col-label">CONNECT</span>
            <a href="mailto:solutions@zyra-ndt.com" className="footer-nav-link">SOLUTIONS@ZYRA-NDT.COM</a>
            <a href="tel:+442079460000" className="footer-nav-link">+44 20 7946 0000</a>
            <a href="#contact" className="footer-nav-link">START_INSPECTION</a>
          </div>
          <div className="footer-nav-col">
            <span className="footer-col-label">RESEARCH</span>
            <a href="#" className="footer-nav-link">LINKEDIN_ID</a>
            <a href="#" className="footer-nav-link">RESEARCH_GATE</a>
            <a href="#" className="footer-nav-link">TECH_JOURNAL</a>
          </div>
        </div>

        {/* Address row */}
        <div className="footer-address-row">
          <p>
            CANARY WHARF, LONDON, E14 5AA, UNITED KINGDOM
          </p>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright-group">
            <span className="footer-copyright">
              © 2026 NDT-ZYRA_CORP
            </span>
            <div className="footer-separator"></div>
            <div className="footer-legal-links">
              <span className="footer-nav-link">PRIVACY_PROTOCOL</span>
              <span className="footer-nav-link">SECURITY_TERMS</span>
            </div>
          </div>
          <span className="iso-badge">
            ISO_9001:CERTIFIED
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
