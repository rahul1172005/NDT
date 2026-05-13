import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [ctaActive, setCtaActive] = useState(false);

  const isActive = (idx: number) => activeCard === idx;

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Centered Header */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="contact-header"
        >
          <h2 className="section-title">
            SECURE YOUR<br />INFRASTRUCTURE
          </h2>
          <p className="section-subtitle">
            READY TO COMMENCE TECHNICAL CONSULTATION OR SITE INTEGRITY AUDIT?
          </p>
        </motion.div>

        {/* 3-col info cards */}
        <div className="contact-grid">

          {/* Email */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setActiveCard(isActive(0) ? null : 0)}
            className={`contact-card ${isActive(0) ? 'active' : ''}`}
          >
            <a
              href="mailto:solutions@zyra-ndt.com"
              onClick={e => e.stopPropagation()}
              className="contact-link"
            >
              solutions@zyra-ndt.com
            </a>
            <p className="contact-label">
              RESPONSE WITHIN 12H
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setActiveCard(isActive(1) ? null : 1)}
            className={`contact-card ${isActive(1) ? 'active' : ''}`}
          >
            <a
              href="tel:+442079460000"
              onClick={e => e.stopPropagation()}
              className="contact-link"
            >
              +44 20 7946 0000
            </a>
            <p className="contact-label">
              OPERATIONAL: 24/7
            </p>
          </motion.div>

          {/* Address */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setActiveCard(isActive(2) ? null : 2)}
            className={`contact-card ${isActive(2) ? 'active' : ''}`}
          >
            <p className="contact-address">
              CANARY WHARF,<br />LONDON, E14 5AA,<br />UNITED KINGDOM
            </p>
          </motion.div>

        </div>

        {/* START CONVERSATION */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setCtaActive(v => !v)}
          className={`contact-cta ${ctaActive ? 'active' : ''}`}
        >
          <span className="contact-cta-text">
            START CONVERSATION
          </span>
          <div className="contact-cta-icon">
            <ArrowRight size={22} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
