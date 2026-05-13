import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'P-2024-01',
    title: 'TRANS-CONTINENTAL PIPELINE INTEGRITY',
    image: '/assets/images/project-pipeline.png',
    category: 'HYDROCARBON',
    location: 'NORTH SEA OFFSHORE',
    year: '2024',
    status: 'COMPLETED',
    scope: 'AUTOMATED CORROSION MAPPING · LONG-RANGE UT · WELD SCANNING',
    featured: true,
  },
  {
    id: 'P-2024-02',
    title: 'BRIDGE STRUCTURAL HEALTH AUDIT',
    image: '/assets/images/bg1.jpg',
    category: 'INFRASTRUCTURE',
    location: 'METROPOLITAN TRANSIT NETWORK',
    year: '2024',
    status: 'ACTIVE',
    scope: 'GPR SCANNING · ACOUSTIC EMISSION · CONCRETE REBAR ANALYSIS',
    featured: false,
  },
  {
    id: 'P-2023-09',
    title: 'AEROSPACE TURBINE VALIDATION',
    image: '/assets/images/cl4.png',
    category: 'AERONAUTICS',
    location: 'GLOBAL PROPULSION HUB',
    year: '2023',
    status: 'VERIFIED',
    scope: 'PHASED ARRAY UT · EDDY CURRENT ARRAY · FLAW CHARACTERIZATION',
    featured: false,
  },
  {
    id: 'P-2023-04',
    title: 'NUCLEAR CONTAINMENT INSPECTION',
    image: '/assets/images/manufacturing.png',
    category: 'CRITICAL ENERGY',
    location: 'REACTOR UNIT 4',
    year: '2023',
    status: 'OPERATIONAL',
    scope: 'REMOTE VISUAL · VOLUMETRIC RADIOGRAPHY · LEAK DETECTION',
    featured: false,
  },
];

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        {/* ── Header ── */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="section-header"
        >
          <h2 className="section-title">
            SELECTED<br />PROJECTS
          </h2>
          <p className="section-subtitle">
            HIGH-PRECISION NDT SOLUTIONS DELIVERED FOR GLOBAL INFRASTRUCTURE LEADERS ACROSS CRITICAL SECTORS, ENSURING ASSET LONGEVITY AND SAFETY COMPLIANCE.
          </p>
        </motion.div>

        {/* ── FEATURED card ── */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          onMouseEnter={() => setHoveredId(featured.id)}
          onMouseLeave={() => setHoveredId(null)}
          className={`featured-project-card ${hoveredId === featured.id ? 'hovered' : ''}`}
        >
          <motion.div
            animate={{ scale: hoveredId === featured.id ? 1.04 : 1 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="card-bg-wrapper"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="card-img"
            />
          </motion.div>

          <div className="card-overlay" />

          <div className="featured-project-content">
            <div className="project-info">
              <h3 className="project-title">
                {featured.title}
              </h3>
              <div className="project-scope">
                {featured.scope}
              </div>
            </div>
            <motion.div
              animate={{ rotate: hoveredId === featured.id ? 45 : 0, scale: hoveredId === featured.id ? 1.05 : 1 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="project-arrow-btn"
            >
              <ArrowUpRight size={28} />
            </motion.div>
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <div className="projects-grid">
          {rest.map((project) => (
            <motion.div
              key={project.id}
              animate={{ opacity: 1, y: 0 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`project-card ${hoveredId === project.id ? 'hovered' : ''}`}
            >
              <motion.div
                animate={{ scale: hoveredId === project.id ? 1.06 : 1 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                className="card-bg-wrapper"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img"
                />
              </motion.div>

              <div className="card-overlay" />

              <div className="project-card-content">
                <h4 className="project-card-title">
                  {project.title}
                </h4>
                <div className="project-card-scope">
                  {project.scope}
                </div>

                <div className="project-card-footer">
                  <motion.div
                    animate={{ x: hoveredId === project.id ? 4 : 0, y: hoveredId === project.id ? -4 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer button ── */}
        <div className="section-footer-btn-wrapper">
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="explore-btn"
          >
            EXPLORE ARCHIVE
            <ArrowRight size={16} />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
