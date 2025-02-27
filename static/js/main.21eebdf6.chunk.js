(this["webpackJsonpresume-website"]=this["webpackJsonpresume-website"]||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},20:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),i=n.n(r),o=n(1);var c=function(e){const[t,n]=Object(a.useState)(!1),r=Object(a.useRef)();return Object(a.useEffect)(()=>{new IntersectionObserver(e=>{e.forEach(e=>n(e.isIntersecting))}).observe(r.current)},[]),l.a.createElement("div",{className:"fade-in-section "+(t?"is-visible":""),ref:r},e.children)};const s=o.b.button`
  position: fixed; /* Fixed position */
  top: 20px; /* Distance from the top */
  right: 20px; /* Distance from the right */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 1000; /* Ensure it's above other content */
`;var u=function(e){let{theme:t,toggleTheme:n}=e;return l.a.createElement(s,{onClick:n},"light"===t?"\u2600\ufe0f":"\ud83c\udf19")};n(6);const m={background:"#ffffff",textColor:"#000000",worldLine:"#40E0D0",gridColor:"rgba(64, 224, 208, 0.1)"},d={background:"#000000",textColor:"#ffffff",worldLine:"#ff0000",gridColor:"rgba(255, 0, 0, 0.1)"},h=o.b.div`
  background-color: ${e=>e.theme.background};
  color: ${e=>e.theme.textColor};
  min-height: 100vh;
  padding: 20px;
  position: relative;
`,g=o.b.div`
  position: absolute;
  left: 50%;
  top: 200px; /* Start below Section 1 */
  width: 2px;
  height: calc(100% - 200px); /* Adjust height to start from Section 1 */
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
`,f=o.b.a`
  color: ${e=>e.theme.textColor};
  text-decoration: none;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0 0 5px ${e=>e.theme.textColor}, 0 0 10px ${e=>e.theme.textColor};
  }
`;var b=function(){const[e,t]=Object(a.useState)("light");return l.a.createElement(o.a,{theme:"light"===e?m:d},l.a.createElement(h,null,l.a.createElement(u,{theme:e,toggleTheme:()=>{t("light"===e?"dark":"light")}}),l.a.createElement(g,null),l.a.createElement(c,null,l.a.createElement(p,null,l.a.createElement("h1",null,"Thushal Bharadwaj Nelamane Venkatesh"),l.a.createElement("p",null,"Virginia, USA | tvenkb@gmail.com | (703) 594-6142"),l.a.createElement("p",null,l.a.createElement(f,{href:"https://github.com/tvenk",target:"_blank",rel:"noopener noreferrer"},"GitHub")," |"," ",l.a.createElement(f,{href:"https://www.linkedin.com/in/tbnv/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")))),l.a.createElement(c,null,l.a.createElement(E,{align:"left"},l.a.createElement("h2",null,"EDUCATION"),l.a.createElement("p",null,"Bachelor of Science in Information Technology - Information Security Concentration"),l.a.createElement("p",null,"George Mason University, Fairfax, VA | May 2023"),l.a.createElement("ul",null,l.a.createElement("li",null,"Security-focused IT professional with hands-on experience in network security, SIEM implementation, and automation."),l.a.createElement("li",null,"Demonstrated expertise in threat detection, incident response, and security tools implementation.")))),l.a.createElement(c,null,l.a.createElement(E,{align:"right"},l.a.createElement("h2",null,"CERTIFICATIONS & SKILLS"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Certifications:")," CompTIA Security+, Palo Alto Network based certs., TryHackMe SOC I"),l.a.createElement("li",null,l.a.createElement("strong",null,"Security Tools:")," Wazuh SIEM, Elastic Stack, Snort IDS/IPS, CrowdSec, Palo Alto Firewalls"),l.a.createElement("li",null,l.a.createElement("strong",null,"Technical:")," Python, PowerShell, SQL, Selenium, AWS, Terraform, Docker, Ansible"),l.a.createElement("li",null,l.a.createElement("strong",null,"Systems:")," Red Hat Linux, Windows, Unix | Tools: Jira, Confluence, SharePoint, Git, Github")))),l.a.createElement(c,null,l.a.createElement(E,{align:"left"},l.a.createElement("h2",null,"PROFESSIONAL EXPERIENCE"),l.a.createElement("h3",null,"IT Network and Cybersecurity Intern | TDS Telecom (Remote) | May 2023 - May 2024"),l.a.createElement("ul",null,l.a.createElement("li",null,"Implemented Elasticsearch/Kibana security monitoring, reducing threat detection time by 60%."),l.a.createElement("li",null,"Engineered 400+ Kali Linux command detection rules in Elastic SIEM for enhanced SOC capabilities."),l.a.createElement("li",null,"Automated device integration using Python/REST APIs, improving efficiency by 90%."),l.a.createElement("li",null,"Developed security documentation for enterprise systems and custom Selenium automation scripts."),l.a.createElement("li",null,"Created manifest for decommissioning old firewall devices without causing any policy collisions."),l.a.createElement("li",null,"Utilized grok parsing for hundreds of production server data for Elasticsearch log ingest with 0 errors.")),l.a.createElement("h3",null,"IT Student | Great Oaks Cleaning Solution (Remote) | December 2022 \u2013 May 2023"),l.a.createElement("ul",null,l.a.createElement("li",null,"Architected secure LAMP stack web application following OWASP guidelines."),l.a.createElement("li",null,"Implemented security-focused customer engagement system with 40% conversion improvement.")))),l.a.createElement(c,null,l.a.createElement(E,{align:"right"},l.a.createElement("h2",null,"PERSONAL PROJECTS"),l.a.createElement("h3",null,"Automation/AI & Security Infrastructure"),l.a.createElement("ul",null,l.a.createElement("li",null,"Developed a browser extension using JavaScript, Chrome Extensions API, and Kimi AI API to analyze user history and generate a personalized composite compatibility score from 0 to 100 saving them engagement time."),l.a.createElement("li",null,"Built comprehensive security lab with Crowdsec, SNORT IDS/IPS, and Wazuh SIEM."),l.a.createElement("li",null,"Developed Python-based financial analysis tools with secure data handling.")))),l.a.createElement(c,null,l.a.createElement(E,{align:"left"},l.a.createElement("h2",null,"PROFESSIONAL DEVELOPMENT"),l.a.createElement("h3",null,"Clifford Chance Cyber Security Global Job Simulation"),l.a.createElement("ul",null,l.a.createElement("li",null,"Completed the 5-day Clifford Chance job simulation, assisting clients with legal issues related to cyber breaches."),l.a.createElement("li",null,"Assisted a major eCommerce business notification of stakeholders in compliance with GDPR regulation."),l.a.createElement("li",null,"Formulated defensive strategies for a client with data center operations for approximately 10,000 records.")),l.a.createElement("h3",null,"AWS APAC Solutions Architecture Virtual Experience"),l.a.createElement("ul",null,l.a.createElement("li",null,"Designed a simple and scalable hosting architecture based on Elastic Beanstalk for a client."),l.a.createElement("li",null,"Described my proposed architecture in jargon-free language to ensure client understanding of how it works and how costs will be calculated.")),l.a.createElement("h3",null,"JPMorgan Chase & Co. Cybersecurity Job Simulation"),l.a.createElement("ul",null,l.a.createElement("li",null,"Analyzed fraud datasets and built text-based ML models for spam email classification."),l.a.createElement("li",null,"Built a spam email classifier achieving an accuracy rate of 85%."),l.a.createElement("li",null,"Designed and developed a system to tighten access to sensitive information, reducing unauthorized access attempts by 30%."))))))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))},6:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.21eebdf6.chunk.js.map