import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import FadeInSection from './FadeInSection';
import ThemeToggle from './ThemeToggle';
import './index.css';

// Define your themes
const lightTheme = {
  background: '#ffffff',
  textColor: '#000000', // Black in light mode
  worldLine: '#40E0D0', // Turquoise for light mode
  gridColor: 'rgba(64, 224, 208, 0.1)', // Faded turquoise grid
};

const darkTheme = {
  background: '#000000',
  textColor: '#ffffff', // White in dark mode
  worldLine: '#ff0000', // Red for dark mode
  gridColor: 'rgba(255, 0, 0, 0.1)', // Faded red grid
};

// Styled components
const AppContainer = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.textColor};
  min-height: 100vh;
  padding: 20px;
  position: relative;
`;

const WorldLine = styled.div`
  position: absolute;
  left: 50%;
  top: 200px; /* Start below Section 1 */
  width: 2px;
  height: calc(100% - 200px); /* Adjust height to start from Section 1 */
  background-color: ${props => props.theme.worldLine};
  z-index: 0;
`;

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

const GlowLink = styled.a`
  color: ${props => props.theme.textColor};
  text-decoration: none;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0 0 5px ${props => props.theme.textColor}, 0 0 10px ${props => props.theme.textColor};
  }
`;

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppContainer>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <WorldLine />

        {/* Section 1: Header (Centered) */}
        <FadeInSection>
          <CenterSection>
            <h1>Thushal Bharadwaj Nelamane Venkatesh</h1>
            <p>Virginia, USA | tvenkb@gmail.com</p>
            <p>
              <GlowLink href="https://github.com/tvenk" target="_blank" rel="noopener noreferrer">GitHub</GlowLink> |{' '}
              <GlowLink href="https://www.linkedin.com/in/tbnv/" target="_blank" rel="noopener noreferrer">LinkedIn</GlowLink>
            </p>
          </CenterSection>
        </FadeInSection>

        {/* Section 2: Education (Left) */}
        <FadeInSection>
          <Section align="left">
            <h2>EDUCATION</h2>
            <p>Bachelor of Science in Information Technology - Information Security Concentration</p>
            <p>George Mason University, Fairfax, VA | May 2023</p>
            <ul>
              <li>Security-focused IT professional with hands-on experience in network security, SIEM implementation, and automation.</li>
              <li>Demonstrated expertise in threat detection, incident response, and security tools implementation.</li>
            </ul>
          </Section>
        </FadeInSection>

        {/* Section 3: Certifications & Skills (Right) */}
        <FadeInSection>
          <Section align="right">
            <h2>CERTIFICATIONS & SKILLS</h2>
            <ul>
              <li><strong>Certifications:</strong> CompTIA Security+, Palo Alto Network based certs., TryHackMe SOC I</li>
              <li><strong>Security Tools:</strong> Wazuh SIEM, Elastic Stack, Snort IDS/IPS, CrowdSec, Palo Alto Firewalls</li>
              <li><strong>Technical:</strong> Python, PowerShell, SQL, Selenium, AWS, Terraform, Docker, Ansible</li>
              <li><strong>Systems: Red Hat Linux, Windows, Unix | Tools: Jira, Confluence, SharePoint, Git, Github</li>
            </ul>
          </Section>
        </FadeInSection>

        {/* Section 4: Professional Experience (Left) */}
        <FadeInSection>
          <Section align="left">
            <h2>PROFESSIONAL EXPERIENCE</h2>
            <h3>IT Network and Cybersecurity Intern | TDS Telecom (Remote) | May 2023 - May 2024</h3>
            <ul>
              <li>Implemented Elasticsearch/Kibana security monitoring, reducing threat detection time by 60%.</li>
              <li>Engineered 400+ Kali Linux command detection rules in Elastic SIEM for enhanced SOC capabilities.</li>
              <li>Automated device integration using Python/REST APIs, improving efficiency by 90%.</li>
              <li>Developed security documentation for enterprise systems and custom Selenium automation scripts.</li>
              <li>Created manifest for decommissioning old firewall devices without causing any policy collisions.</li>
              <li>Utilized grok parsing for hundreds of production server data for Elasticsearch log ingest with 0 errors.</li>
            </ul>
            <h3>IT Student | Great Oaks Cleaning Solution (Remote) | December 2022 – May 2023</h3>
            <ul>
              <li>Architected secure LAMP stack web application following OWASP guidelines.</li>
              <li>Implemented security-focused customer engagement system with 40% conversion improvement.</li>
            </ul>
          </Section>
        </FadeInSection>

        {/* Section 5: Personal Projects (Right) */}
        <FadeInSection>
          <Section align="right">
            <h2>PERSONAL PROJECTS</h2>
            <h3>Automation/AI & Security Infrastructure</h3>
            <ul>
              <li>Developed a browser extension using JavaScript, Chrome Extensions API, and Kimi AI API to analyze user history and generate a personalized composite compatibility score from 0 to 100 saving them engagement time.</li>
              <li>Built comprehensive security lab with Crowdsec, SNORT IDS/IPS, and Wazuh SIEM.</li>
              <li>Developed Python-based financial analysis tools with secure data handling.</li>
            </ul>
          </Section>
        </FadeInSection>

        {/* Section 6: Professional Development (Left) */}
        <FadeInSection>
          <Section align="left">
            <h2>PROFESSIONAL DEVELOPMENT</h2>
            <h3>Clifford Chance Cyber Security Global Job Simulation</h3>
            <ul>
              <li>Completed the 5-day Clifford Chance job simulation, assisting clients with legal issues related to cyber breaches.</li>
              <li>Assisted a major eCommerce business notification of stakeholders in compliance with GDPR regulation.</li>
              <li>Formulated defensive strategies for a client with data center operations for approximately 10,000 records.</li>
            </ul>
            <h3>AWS APAC Solutions Architecture Virtual Experience</h3>
            <ul>
              <li>Designed a simple and scalable hosting architecture based on Elastic Beanstalk for a client.</li>
              <li>Described my proposed architecture in jargon-free language to ensure client understanding of how it works and how costs will be calculated.</li>
            </ul>
            <h3>JPMorgan Chase & Co. Cybersecurity Job Simulation</h3>
            <ul>
              <li>Analyzed fraud datasets and built text-based ML models for spam email classification.</li>
              <li>Built a spam email classifier achieving an accuracy rate of 85%.</li>
              <li>Designed and developed a system to tighten access to sensitive information, reducing unauthorized access attempts by 30%.</li>
            </ul>
          </Section>
        </FadeInSection>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
