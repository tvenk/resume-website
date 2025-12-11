/**
 * App.js - Main Resume Website Component
 *
 * This is the root component of the resume website. It contains:
 * 1. Theme configuration (light/dark mode)
 * 2. Styled components for layout
 * 3. All resume content organized into sections
 *
 * Flow: index.js renders App.js -> App.js uses ThemeProvider to wrap all content
 *       -> Each section uses FadeInSection for scroll animations
 *       -> ThemeToggle allows users to switch between light/dark themes
 *
 * Dependencies:
 * - styled-components: CSS-in-JS library for component styling
 * - FadeInSection.js: Wrapper component that fades in content on scroll
 * - ThemeToggle.js: Button component to switch between light/dark themes
 */

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import FadeInSection from './FadeInSection';
import ThemeToggle from './ThemeToggle';
import './index.css';

/* ============================================
   THEME CONFIGURATION
   ============================================
   Define color schemes for light and dark modes.
   These values are accessible via props.theme in styled components.
*/

const lightTheme = {
  background: '#ffffff',      // White background
  textColor: '#000000',       // Black text for readability
  worldLine: '#40E0D0',       // Turquoise vertical timeline
  gridColor: 'rgba(64, 224, 208, 0.1)', // Faded turquoise grid pattern
};

const darkTheme = {
  background: '#000000',      // Black background
  textColor: '#ffffff',       // White text for contrast
  worldLine: '#ff0000',       // Red vertical timeline
  gridColor: 'rgba(255, 0, 0, 0.1)', // Faded red grid pattern
};

/* ============================================
   STYLED COMPONENTS
   ============================================
   These components define the visual layout of the resume.
   Each component receives theme colors via props.theme.
*/

/**
 * AppContainer - The main wrapper for the entire page
 * Sets background color, text color, and minimum height
 */
const AppContainer = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.textColor};
  min-height: 100vh;
  padding: 20px;
  position: relative;
`;

/**
 * WorldLine - The vertical timeline running down the center of the page
 * Creates a visual connection between all resume sections
 */
const WorldLine = styled.div`
  position: absolute;
  left: 50%;
  top: 200px;
  width: 2px;
  height: calc(100% - 200px);
  background-color: ${props => props.theme.worldLine};
  z-index: 0;
`;

/**
 * Section - A content box that can be aligned left or right
 * Used for most resume sections (Education, Experience, etc.)
 * Pass align="left" or align="right" to position the section
 */
const Section = styled.div`
  margin: 50px 0;
  padding: 20px;
  position: relative;
  z-index: 1;
  max-width: 45%;
  background-color: ${props => props.theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: ${props => (props.align === 'right' ? '50%' : '5%')};
  color: ${props => props.theme.textColor};
`;

/**
 * CenterSection - A centered content box for the header
 * Includes a grid background pattern for visual interest
 */
const CenterSection = styled.div`
  text-align: center;
  margin: 50px auto;
  padding: 20px;
  max-width: 600px;
  position: relative;
  z-index: 1;
  background-color: ${props => props.theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.textColor};
  overflow: hidden;

  /* Grid background pattern using CSS gradients */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, ${props => props.theme.gridColor} 1px, transparent 1px),
                      linear-gradient(to bottom, ${props => props.theme.gridColor} 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: -1;
  }
`;

/**
 * GlowLink - A styled anchor tag with hover glow effect
 * Used for clickable links (GitHub, LinkedIn, Portfolio)
 */
const GlowLink = styled.a`
  color: ${props => props.theme.textColor};
  text-decoration: none;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0 0 5px ${props => props.theme.textColor}, 0 0 10px ${props => props.theme.textColor};
  }
`;

/* ============================================
   MAIN APP COMPONENT
   ============================================
   The App function component manages theme state and renders all resume content.
*/

function App() {
  // State to track current theme ('light' or 'dark')
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // ThemeProvider makes theme colors available to all styled components
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppContainer>
        {/* Theme toggle button (fixed position, top-right corner) */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

        {/* Vertical timeline line connecting all sections */}
        <WorldLine />

        {/* ----------------------------------------
            SECTION 1: Header / Contact Information
            Centered at the top of the page
        ---------------------------------------- */}
        <FadeInSection>
          <CenterSection>
            <h1>Thushal Bharadwaj Nelamane Venkatesh</h1>
            <p>Virginia, USA | tvenkb@gmail.com</p>
            <p>Work Authorization: Green Card</p>
            <p>
              <GlowLink href="https://tvenk.github.io/resume-website/" target="_blank" rel="noopener noreferrer">Portfolio</GlowLink> |{' '}
              <GlowLink href="https://github.com/tvenk" target="_blank" rel="noopener noreferrer">GitHub</GlowLink> |{' '}
              <GlowLink href="https://www.linkedin.com/in/tbnv/" target="_blank" rel="noopener noreferrer">LinkedIn</GlowLink>
            </p>
          </CenterSection>
        </FadeInSection>

        {/* ----------------------------------------
            SECTION 2: Education
            Aligned to the left side of the timeline
        ---------------------------------------- */}
        <FadeInSection>
          <Section align="left">
            <h2>EDUCATION</h2>

            {/* Undergraduate Degree */}
            <p><strong>Bachelor of Science in Information Technology - Information Security Concentration</strong></p>
            <p>George Mason University, Fairfax, VA | May 2023</p>

            {/* Graduate Degree (In Progress) */}
            <p style={{ marginTop: '20px' }}><strong>Online Master of Science in Cybersecurity</strong></p>
            <p>Georgia Tech, Atlanta, GA | Expected ~May 2028</p>
          </Section>
        </FadeInSection>

        {/* ----------------------------------------
            SECTION 3: Certifications & Skills
            Aligned to the right side of the timeline
        ---------------------------------------- */}
        <FadeInSection>
          <Section align="right">
            <h2>CERTIFICATIONS & SKILLS</h2>
            <ul>
              <li><strong>Certifications:</strong> CompTIA Security+, CompTIA Network+, Palo Alto Network based certs., TryHackMe SOC I</li>
              <li><strong>Security Tools:</strong> Wazuh SIEM, Elastic Stack, Snort IDS/IPS, CrowdSec, Palo Alto Firewalls</li>
              <li><strong>Technical:</strong> Python, PowerShell, SQL, Selenium automation, REST API</li>
              <li><strong>Systems:</strong> Red Hat Linux, Windows, Unix</li>
              <li><strong>Tools:</strong> Jira, Confluence, SharePoint, Git, Github, Microsoft Suite</li>
            </ul>
          </Section>
        </FadeInSection>

        {/* ----------------------------------------
            SECTION 4: Professional Experience
            Aligned to the left side of the timeline
            Jobs are listed in reverse chronological order (newest first)
        ---------------------------------------- */}
        <FadeInSection>
          <Section align="left">
            <h2>PROFESSIONAL EXPERIENCE</h2>

            {/* Job 1: Most Recent Position */}
            <h3>Part Time Application Developer | Suviko LLC (Remote) | October 2025 - Present</h3>
            <ul>
              <li>Managed Git version control, including branch handling, remote pushes, and commit refactoring/tracking using Git branching and history rewrite techniques.</li>
              <li>Implemented Firebase Authentication with role-based custom claims to secure user and driver access.</li>
              <li>Designed and maintained Firestore Database schemas with optimized indexing and secure data structures for user and trip collections.</li>
              <li>Resolved CI/CD pipeline issues and environment configuration errors to ensure secure and reliable build processes for Android deployment.</li>
              <li>Developed and tested Cloud Functions for lifecycle management, integrating Square for secure payment processing.</li>
            </ul>

            {/* Job 2: Previous Position */}
            <h3>IT Network and Cybersecurity Intern | TDS Telecom (Remote) | May 2023 - May 2024</h3>
            <ul>
              <li>Reduced threat detection time by 60% through Elasticsearch/Kibana security monitoring.</li>
              <li>Developed 400+ Kali Linux command detection rules in Elastic SIEM, enhancing SOC visibility.</li>
              <li>Automated device integration with Python and REST APIs, improving efficiency by 90%.</li>
              <li>Streamlined system management by creating comprehensive security documentation and Selenium automation scripts, reducing operational delays.</li>
              <li>Designed a manifest for firewall decommissioning, ensuring zero policy collisions.</li>
              <li>Improved Elasticsearch data accuracy with 0 errors using grok parsing for log ingestion.</li>
            </ul>

            {/* Job 3: Entry Level Position */}
            <h3>IT Student | Great Oaks Cleaning Solution (Remote) | December 2022 - May 2023</h3>
            <ul>
              <li>Developed a secure LAMP stack web app, following OWASP guidelines.</li>
              <li>Implemented a security-focused customer engagement system, increasing conversions by 40%.</li>
            </ul>
          </Section>
        </FadeInSection>

        {/* ----------------------------------------
            SECTION 5: Personal Projects
            Aligned to the right side of the timeline
            Showcases independent work and technical skills
        ---------------------------------------- */}
        <FadeInSection>
          <Section align="right">
            <h2>PERSONAL PROJECTS</h2>
            <p><em>2024-2025</em></p>

            {/* Project Category 1 */}
            <h3>Automation Scripting</h3>
            <ul>
              <li>Created a Python based script for automated copy paste of CLI text into various AI websites.</li>
            </ul>

            {/* Project Category 2 */}
            <h3>Financial Analysis via Scripting</h3>
            <ul>
              <li>Created a Python based financial analyzer script for investment guidance, including dollar cost averaging.</li>
            </ul>

            {/* Project Category 3 */}
            <h3>Security Infrastructure</h3>
            <ul>
              <li>Built a comprehensive security lab with Crowdsec, SNORT IDS/IPS, and Wazuh SIEM.</li>
            </ul>
          </Section>
        </FadeInSection>

      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
