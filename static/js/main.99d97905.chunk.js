(this["webpackJsonpresume-website"]=this["webpackJsonpresume-website"]||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},20:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),i=n.n(r),o=n(1);var c=function(e){const[t,n]=Object(a.useState)(!1),r=Object(a.useRef)();return Object(a.useEffect)(()=>{new IntersectionObserver(e=>{e.forEach(e=>n(e.isIntersecting))}).observe(r.current)},[]),l.a.createElement("div",{className:"fade-in-section "+(t?"is-visible":""),ref:r},e.children)};const s=o.b.button`
  position: fixed; /* Fixed position */
  top: 20px; /* Distance from the top */
  right: 20px; /* Distance from the right */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 1000; /* Ensure it's above other content */
`;var u=function(e){let{theme:t,toggleTheme:n}=e;return l.a.createElement(s,{onClick:n},"light"===t?"\u2600\ufe0f":"\ud83c\udf19")};n(6);const m={background:"#ffffff",textColor:"#000000",worldLine:"#40E0D0",gridColor:"rgba(64, 224, 208, 0.1)"},d={background:"#000000",textColor:"#ffffff",worldLine:"#ff0000",gridColor:"rgba(255, 0, 0, 0.1)"},g=o.b.div`
  background-color: ${e=>e.theme.background};
  color: ${e=>e.theme.textColor};
  min-height: 100vh;
  padding: 20px;
  position: relative;
`,h=o.b.div`
  position: absolute;
  left: 50%;
  top: 200px;
  width: 2px;
  height: calc(100% - 200px);
  background-color: ${e=>e.theme.worldLine};
  z-index: 0;
`,E=o.b.div`
  margin: 50px 0;
  padding: 20px;
  position: relative;
  z-index: 1;
  max-width: 45%;
  background-color: ${e=>e.theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: ${e=>"right"===e.align?"50%":"5%"};
  color: ${e=>e.theme.textColor};
`,p=o.b.div`
  text-align: center;
  margin: 50px auto;
  padding: 20px;
  max-width: 600px;
  position: relative;
  z-index: 1;
  background-color: ${e=>e.theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  color: ${e=>e.theme.textColor};
  overflow: hidden;

  /* Grid background pattern using CSS gradients */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, ${e=>e.theme.gridColor} 1px, transparent 1px),
                      linear-gradient(to bottom, ${e=>e.theme.gridColor} 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: -1;
  }
`,b=o.b.a`
  color: ${e=>e.theme.textColor};
  text-decoration: none;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0 0 5px ${e=>e.theme.textColor}, 0 0 10px ${e=>e.theme.textColor};
  }
`;var f=function(){const[e,t]=Object(a.useState)("light");return l.a.createElement(o.a,{theme:"light"===e?m:d},l.a.createElement(g,null,l.a.createElement(u,{theme:e,toggleTheme:()=>{t("light"===e?"dark":"light")}}),l.a.createElement(h,null),l.a.createElement(c,null,l.a.createElement(p,null,l.a.createElement("h1",null,"Thushal Bharadwaj Nelamane Venkatesh"),l.a.createElement("p",null,"Virginia, USA | tvenkb@gmail.com"),l.a.createElement("p",null,"Work Authorization: Green Card"),l.a.createElement("p",null,l.a.createElement(b,{href:"https://tvenk.github.io/resume-website/",target:"_blank",rel:"noopener noreferrer"},"Portfolio")," |"," ",l.a.createElement(b,{href:"https://github.com/tvenk",target:"_blank",rel:"noopener noreferrer"},"GitHub")," |"," ",l.a.createElement(b,{href:"https://www.linkedin.com/in/tbnv/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")))),l.a.createElement(c,null,l.a.createElement(E,{align:"left"},l.a.createElement("h2",null,"EDUCATION"),l.a.createElement("p",null,l.a.createElement("strong",null,"Bachelor of Science in Information Technology - Information Security Concentration")),l.a.createElement("p",null,"George Mason University, Fairfax, VA | May 2023"),l.a.createElement("p",{style:{marginTop:"20px"}},l.a.createElement("strong",null,"Online Master of Science in Cybersecurity")),l.a.createElement("p",null,"Georgia Tech, Atlanta, GA | Expected ~May 2028"))),l.a.createElement(c,null,l.a.createElement(E,{align:"right"},l.a.createElement("h2",null,"CERTIFICATIONS & SKILLS"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Certifications:")," CompTIA Security+, CompTIA Network+, Palo Alto Network based certs., TryHackMe SOC I"),l.a.createElement("li",null,l.a.createElement("strong",null,"Security Tools:")," Wazuh SIEM, Elastic Stack, Snort IDS/IPS, CrowdSec, Palo Alto Firewalls"),l.a.createElement("li",null,l.a.createElement("strong",null,"Technical:")," Python, PowerShell, SQL, Selenium automation, REST API"),l.a.createElement("li",null,l.a.createElement("strong",null,"Systems:")," Red Hat Linux, Windows, Unix"),l.a.createElement("li",null,l.a.createElement("strong",null,"Tools:")," Jira, Confluence, SharePoint, Git, Github, Microsoft Suite")))),l.a.createElement(c,null,l.a.createElement(E,{align:"left"},l.a.createElement("h2",null,"PROFESSIONAL EXPERIENCE"),l.a.createElement("h3",null,"Part Time Application Developer | Suviko LLC (Remote) | October 2025 - Present"),l.a.createElement("ul",null,l.a.createElement("li",null,"Managed Git version control, including branch handling, remote pushes, and commit refactoring/tracking using Git branching and history rewrite techniques."),l.a.createElement("li",null,"Implemented Firebase Authentication with role-based custom claims to secure user and driver access."),l.a.createElement("li",null,"Designed and maintained Firestore Database schemas with optimized indexing and secure data structures for user and trip collections."),l.a.createElement("li",null,"Resolved CI/CD pipeline issues and environment configuration errors to ensure secure and reliable build processes for Android deployment."),l.a.createElement("li",null,"Developed and tested Cloud Functions for lifecycle management, integrating Square for secure payment processing.")),l.a.createElement("h3",null,"IT Network and Cybersecurity Intern | TDS Telecom (Remote) | May 2023 - May 2024"),l.a.createElement("ul",null,l.a.createElement("li",null,"Reduced threat detection time by 60% through Elasticsearch/Kibana security monitoring."),l.a.createElement("li",null,"Developed 400+ Kali Linux command detection rules in Elastic SIEM, enhancing SOC visibility."),l.a.createElement("li",null,"Automated device integration with Python and REST APIs, improving efficiency by 90%."),l.a.createElement("li",null,"Streamlined system management by creating comprehensive security documentation and Selenium automation scripts, reducing operational delays."),l.a.createElement("li",null,"Designed a manifest for firewall decommissioning, ensuring zero policy collisions."),l.a.createElement("li",null,"Improved Elasticsearch data accuracy with 0 errors using grok parsing for log ingestion.")),l.a.createElement("h3",null,"IT Student | Great Oaks Cleaning Solution (Remote) | December 2022 - May 2023"),l.a.createElement("ul",null,l.a.createElement("li",null,"Developed a secure LAMP stack web app, following OWASP guidelines."),l.a.createElement("li",null,"Implemented a security-focused customer engagement system, increasing conversions by 40%.")))),l.a.createElement(c,null,l.a.createElement(E,{align:"right"},l.a.createElement("h2",null,"PERSONAL PROJECTS"),l.a.createElement("p",null,l.a.createElement("em",null,"2024-2025")),l.a.createElement("h3",null,"Automation Scripting"),l.a.createElement("ul",null,l.a.createElement("li",null,"Created a Python based script for automated copy paste of CLI text into various AI websites.")),l.a.createElement("h3",null,"Financial Analysis via Scripting"),l.a.createElement("ul",null,l.a.createElement("li",null,"Created a Python based financial analyzer script for investment guidance, including dollar cost averaging.")),l.a.createElement("h3",null,"Security Infrastructure"),l.a.createElement("ul",null,l.a.createElement("li",null,"Built a comprehensive security lab with Crowdsec, SNORT IDS/IPS, and Wazuh SIEM.")))),l.a.createElement(c,null,l.a.createElement(E,{align:"left"},l.a.createElement("h2",null,"PROFESSIONAL DEVELOPMENT"),l.a.createElement("h3",null,"Clifford Chance Cyber Security Global Job Simulation"),l.a.createElement("ul",null,l.a.createElement("li",null,"Completed the 5-day Clifford Chance job simulation, assisting clients with legal issues related to cyber breaches."),l.a.createElement("li",null,"Assisted a major eCommerce business notification of stakeholders in compliance with GDPR regulation."),l.a.createElement("li",null,"Formulated defensive strategies for a client with data center operations for approximately 10,000 records.")),l.a.createElement("h3",null,"AWS APAC Solutions Architecture Virtual Experience"),l.a.createElement("ul",null,l.a.createElement("li",null,"Designed a simple and scalable hosting architecture based on Elastic Beanstalk for a client."),l.a.createElement("li",null,"Described my proposed architecture in jargon-free language to ensure client understanding of how it works and how costs will be calculated.")),l.a.createElement("h3",null,"JPMorgan Chase & Co. Cybersecurity Job Simulation"),l.a.createElement("ul",null,l.a.createElement("li",null,"Analyzed fraud datasets and built text-based ML models for spam email classification."),l.a.createElement("li",null,"Built a spam email classifier achieving an accuracy rate of 85%."),l.a.createElement("li",null,"Designed and developed a system to tighten access to sensitive information, reducing unauthorized access attempts by 30%."))))))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))},6:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.99d97905.chunk.js.map