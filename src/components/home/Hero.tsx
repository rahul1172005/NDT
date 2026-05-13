import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="section-split hero-main-layout">
          <motion.div
            className="sidebar-info hero-left"
          >
            <div className="hero-labels">
              <span className="hero-tech-label">
                NON-DESTRUCTIVE TESTING · INFRASTRUCTURE INTEGRITY · PRECISION DIAGNOSTICS
              </span>
            </div>

            <p className="side-description hero-description">
              ADVANCED NDT SOLUTIONS FOR GLOBAL INFRASTRUCTURE. WE DEPLOY CUTTING-EDGE DIAGNOSTIC SENSORS TO ENSURE THE ARCHITECTURAL LEGACY OF TOMORROW.
            </p>
          </motion.div>

          <motion.div
            className="hero-right-content hero-right"
          >
            <p className="hero-subtext">
              DEVELOPMENT AND PRODUCTION OF CUSTOM EQUIPMENT FOR PROJECTS OF ANY SCALE, LEVERAGING ADVANCED ENGINEERING AND INNOVATIVE DIAGNOSTIC SOLUTIONS.
            </p>

            <button className="discuss-button hero-cta">
              START CONVERSATION
              <div className="cta-icon-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </button>
          </motion.div>
        </div>
      </div>



      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src="/assets/images/cl3.png"
          alt="Diagnostic Intelligence"
          className="hero-main-image"
        />
        <div className="overlay-gradient"></div>
      </motion.div>

      {/* No hero-numbers */}

    </section>
  );
};

export default Hero;
