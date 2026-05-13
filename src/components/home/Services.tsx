import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const activityItems = [
  { 
    id: '01', 
    title: 'PHASED ARRAY ULTRASONICS', 
    category: 'SUBSURFACE_DIAGNOSTICS',
    tags: ['PAUT', 'TFM', 'AUT'],
    description: 'ADVANCED VOLUMETRIC SCANNING FOR CRITICAL WELD INTEGRITY AND CORROSION MAPPING IN HIGH-PRESSURE SYSTEMS.'
  },
  { 
    id: '02', 
    title: 'DIGITAL RADIOGRAPHY', 
    category: 'PENETRATING_RADIATION',
    tags: ['DR', 'CR', 'X-RAY'],
    description: 'HIGH-RESOLUTION IMAGING FOR INTERNAL DEFECT ANALYSIS IN COMPLEX PIPING NETWORKS AND LARGE-SCALE CASTINGS.'
  },
  { 
    id: '03', 
    title: 'MAGNETIC FLUX LEAKAGE', 
    category: 'ELECTROMAGNETIC',
    tags: ['MFL', 'PEC', 'SURFACE'],
    description: 'HIGH-SPEED DIAGNOSTICS FOR STORAGE TANKS AND BURIED INFRASTRUCTURE, DETECTING WALL THICKNESS LOSS WITH PRECISION.'
  },
  { 
    id: '04', 
    title: 'EDDY CURRENT ARRAY', 
    category: 'ELECTROMAGNETIC',
    tags: ['ECA', 'RFT', 'NFT'],
    description: 'RAPID SURFACE SCANNING FOR FATIGUE CRACKS AND MICRO-DISCONTINUITIES IN CONDUCTIVE MATERIALS AND HEAT EXCHANGERS.'
  },
];

const Services: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const isActive = (idx: number) => activeCard === idx;

  return (
    <section id="activities" className="section-padding services-section">
      <div className="container">

        {/* Centered Header */}
        <motion.div 
          animate={{ opacity: 1, y: 0 }}
          className="services-header"
        >
          <h2 className="section-title services-main-title">
            DIAGNOSTIC<br />SOLUTIONS
          </h2>
          <p className="services-subtitle">
            OUR CORE COMPETENCIES ENCOMPASS THE ENTIRE SPECTRUM OF NON-DESTRUCTIVE TESTING AND INFRASTRUCTURE ANALYSIS, ENSURING OPERATIONAL CONTINUITY IN CRITICAL ENVIRONMENTS.
          </p>
        </motion.div>

        {/* Full-width 2×2 Card Grid */}
        <div className="services-grid">
          {activityItems.map((item, index) => {
            const active = isActive(index);
            return (
              <div
                key={index}
                onClick={() => setActiveCard(active ? null : index)}
                className={`service-card ${active ? 'active' : ''}`}
              >
                <div>
                  {/* ID number placeholder */}
                  <div className="service-card-id"></div>
                  <div>
                    <h3 className="service-card-title">
                      {item.title}
                    </h3>
                    <p className="service-card-description">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer: tags + arrow */}
                <div className="service-card-footer">
                  <div className="service-tags">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tag-item">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="service-arrow-wrapper">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
