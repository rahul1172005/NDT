import { useState, useEffect } from 'react'
import Globe3D from '../common/Globe3D'

const regions = [
  { name: 'EUROPE', cities: 'Oslo · London · Hamburg', node: 'EU_01', status: 'STABLE' },
  { name: 'NORTH AMERICA', cities: 'New York · Toronto · Houston', node: 'NA_04', status: 'STABLE' },
  { name: 'MIDDLE EAST', cities: 'Abu Dhabi · Doha · Riyadh', node: 'ME_09', status: 'STABLE' },
  { name: 'ASIA PACIFIC', cities: 'Singapore · Tokyo · Seoul', node: 'AP_12', status: 'STABLE' },
  { name: 'SOUTH AMERICA', cities: 'Rio · Santiago · Bogota', node: 'SA_07', status: 'STABLE' },
  { name: 'AFRICA', cities: 'Cape Town · Cairo · Lagos', node: 'AF_02', status: 'STABLE' },
  { name: 'SCANDINAVIA', cities: 'Helsinki · Stockholm · Copenhagen', node: 'SC_05', status: 'STABLE' },
  { name: 'CENTRAL ASIA', cities: 'Tashkent · Almaty', node: 'CA_11', status: 'STABLE' },
  { name: 'SOUTHERN ASIA', cities: 'Mumbai · New Delhi · Colombo', node: 'IN_08', status: 'STABLE' },
  { name: 'EASTERN EUROPE', cities: 'Warsaw · Prague · Bucharest', node: 'EE_03', status: 'STABLE' },
]

const Geography = () => {
  const [telemetrySeed, setTelemetrySeed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetrySeed(s => s + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="geography-section section-padding" id="geography">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">GLOBAL NODES</h2>
        </div>

        <div className="geography-grid">
          {/* Regions list card */}
          <div className="geography-regions-card">
            {/* Header removed */}

            <div className="regions-list custom-scrollbar">
              {regions.map((region, idx) => (
                <div key={idx} className="region-row">
                  <div className="region-info">
                    <div className="region-icon">
                      <div className="pulse-dot"></div>
                    </div>
                    <div className="region-main-content">
                      <div className="region-top">
                        <span className="region-name">{region.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="region-status-badge">
                    <div className="latency-box">
                      <span className="status-value">
                        {Math.floor(Math.random() * 15) + 3 + (telemetrySeed % 2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Footer removed */}
          </div>

          {/* Globe visualization card */}
          <div className="geography-globe-card">
            <div className="globe-overlay-top"></div>

            <div className="globe-container">
              <Globe3D offsetX={0} />
            </div>

            <div className="globe-overlay-bottom"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Geography
