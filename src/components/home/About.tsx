import { useEffect } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'wheel') {
        window.scrollBy({ top: e.data.deltaY, left: e.data.deltaX, behavior: 'auto' })
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="brutalist-container">
        {/* Left Column */}
        <motion.div
          className="brutalist-column"
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="brutalist-card card-top-left about-header-card">
            <h2 className="about-zyra-title">ZYRA</h2>
          </div>

          <div className="brutalist-card card-bottom-left about-details-card">
            <div className="about-nested-card">
              <p className="about-label-mono">ESTABLISHED MMXIV</p>
              <h3 className="about-card-title">DIAGNOSTIC EXCELLENCE</h3>
              <p className="about-card-description">
                Leading provider of advanced non-destructive testing
                and high-fidelity asset integrity solutions.
              </p>
            </div>

            <div className="about-nested-card">
              <div className="company-wordings">
                <p className="about-company-vision">
                  WE ARE A COLLECTIVE OF ENGINEERS AND DIAGNOSTICIANS DEDICATED TO REDEFINING THE STANDARDS OF INFRASTRUCTURE SAFETY AND MATERIAL PRECISION. THROUGH SENSOR FUSION AND AI-DRIVEN ANALYTICS, WE ENSURE THE INTEGRITY OF GLOBAL ASSETS.
                </p>
                <div className="about-vision-grid">
                  <p>
                    SINCE 2014, WE HAVE PUSHED THE BOUNDARIES OF NDT, DEVELOPING PROPRIETARY METHODOLOGIES THAT OPTIMIZE ASSET LIFE AND MITIGATE CRITICAL RISKS IN HIGH-STAKES ENVIRONMENTS.
                  </p>
                  <p>
                    FROM NUCLEAR FACILITIES TO DEEP-SEA PIPELINES, OUR REACH IS GLOBAL, BUT OUR FOCUS REMAINS AT THE MOLECULAR LEVEL—ENSURING EVERY WELD AND COMPONENT MEETS ABSOLUTE STANDARDS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="brutalist-column"
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="brutalist-card card-top-right about-image-card">
            <img
              src="/assets/images/cl4.png"
              alt="NDT Diagnostic Detail"
              className="brutalist-image"
            />
          </div>

          <div className="brutalist-card card-bottom-right about-tech-card">
            {/* Particle iframe — fills entire card */}
            <iframe
              src="/particle.html"
              className="about-iframe"
              title="Particle background"
            />

            {/* Title overlay */}
            <div className="about-tech-overlay">
              <h3 className="about-tech-title">
                NEXT GEN<br />TECH
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
