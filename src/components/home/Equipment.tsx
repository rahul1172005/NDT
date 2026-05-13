import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const machineData = [
  {
    id: '01',
    name: 'Phased Array Ultrasonic Scanner',
    category: 'VOLUMETRIC NDT',
    specs: '64:128PR · 3D Real-time Beamforming',
    image: '/assets/images/cl4.png',
    details: 'Advanced volumetric inspection for high-pressure weldments and composite structures. Supports live S-Scan and C-Scan data visualization for immediate defect characterization.',
    tech: 'OLYMPUS OMNISCAN MX3',
    tolerance: 'SUB-MM FLAW',
    status: 'ONLINE',
  },
  {
    id: '02',
    name: 'Eddy Current Array System',
    category: 'SURFACE DIAGNOSTICS',
    specs: 'Multifrequency · 128 Channels',
    image: '/assets/images/industrial-part.png',
    details: 'High-speed surface and near-surface crack detection in conductive materials. Optimized for heat exchanger tube inspection and aircraft skin assessment.',
    tech: 'EDDYFI REDDY ECA',
    tolerance: '±0.01mm CRACK',
    status: 'ONLINE',
  },
  {
    id: '03',
    name: 'Digital Radiography Panel',
    category: 'X-RAY IMAGING',
    specs: '100 Micron Pitch · Wireless CMOS',
    image: '/assets/images/project-pipeline.png',
    details: 'High-fidelity digital imaging for internal structural validation. Eliminates chemical processing, providing instant high-contrast results for critical pipeline tie-ins.',
    tech: 'CARESTREAM HPX-1 Plus',
    tolerance: 'ZERO RADIOGRAPHIC',
    status: 'ONLINE',
  },
  {
    id: '04',
    name: 'Ground Penetrating Radar',
    category: 'SUBSURFACE SCANNING',
    specs: '2.7 GHz Antenna · 3D Tomography',
    image: '/assets/images/gears.png',
    details: 'Precision concrete and soil scanning for rebar mapping and void detection. Vital for structural integrity assessments of bridges and high-rise foundations.',
    tech: 'GSSI STRUCTURESCAN MINI',
    tolerance: '±5mm DEPTH',
    status: 'STANDBY',
  },
];

const fleetStats = [
  { label: 'FLEET COUNT', value: '48', unit: 'UNITS' },
  { label: 'UPTIME RATE', value: '99.4', unit: '%' },
  { label: 'CALIBRATION CYCLE', value: '24', unit: 'HRS' },
  { label: 'ISO CERTIFICATION', value: '17025', unit: ':2017' },
];

const Equipment = () => {
  const [active, setActive] = useState(0);
  const [activeStat, setActiveStat] = useState<number | null>(null);

  return (
    <section id="equipment" className="equipment-section">
      <div className="container">

        {/* ── Header ── */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="equipment-header"
        >
          <h2 className="equipment-title">
            DIAGNOSTIC<br />ECOSYSTEM
          </h2>
          <p className="equipment-subtitle">
            ADVANCED NON-DESTRUCTIVE TESTING INSTRUMENTATION OPERATED UNDER ISO 17025 PROTOCOLS — CALIBRATED DAILY.
          </p>
        </motion.div>

        {/* ── Main Layout ── */}
        <motion.div 
          animate="visible"
          className="equipment-grid"
        >
          {/* LEFT — machine selector list */}
          <div className="equipment-list">
            {machineData.map((m, idx) => {
              const isActive = active === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`equipment-item ${isActive ? 'active' : ''}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <h3 className="equipment-item-name">
                      {m.name}
                    </h3>
                  </div>
                  <div style={{ opacity: isActive ? 1 : 0.2, transition: 'all 0.4s ease' }}>
                    <ChevronRight size={16} color={isActive ? '#000' : '#fff'} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — image + spec overlay */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="equipment-display-panel"
          >
            {/* Machine image — animated crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, filter: 'blur(16px)', scale: 1.06 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(8px)', scale: 0.96 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="equipment-image-wrapper"
              >
                <img
                  src={machineData[active].image}
                  alt={machineData[active].name}
                  className="equipment-main-image"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient overlay */}
            <div className="equipment-display-gradient" />

            {/* Spec overlay card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`spec-${active}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="equipment-overlay-card"
              >
                <h4 className="equipment-overlay-title">
                  {machineData[active].name}
                </h4>
                <p className="equipment-overlay-description">
                  {machineData[active].details}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* ── Bottom stat bar ── */}
        <motion.div 
          animate="visible"
          className="equipment-stat-grid"
        >
          {fleetStats.map((stat, idx) => {
            const isStatActive = activeStat === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStat(isStatActive ? null : idx)}
                className={`equipment-stat-card ${isStatActive ? 'active' : ''}`}
              >
                <div className="equipment-stat-label">
                  {stat.label}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                  <span className="equipment-stat-value">
                    {stat.value}
                  </span>
                  <span className="equipment-stat-unit">
                    {stat.unit}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Equipment;
