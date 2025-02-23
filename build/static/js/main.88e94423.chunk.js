(this["webpackJsonpresume-website"]=this["webpackJsonpresume-website"]||[]).push([[0],{20:function(e,t,i){},21:function(e,t,i){},22:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i.n(n),c=i(7),s=i.n(c),o=i(2),l=i(0);var a=function(e){const[t,i]=Object(n.useState)(!1),r=Object(n.useRef)();return Object(n.useEffect)((()=>{new IntersectionObserver((e=>{e.forEach((e=>i(e.isIntersecting)))})).observe(r.current)}),[]),Object(l.jsx)("div",{className:"fade-in-section "+(t?"is-visible":""),ref:r,children:e.children})};const d=o.b.button`
  position: fixed; /* Fixed position */
  top: 20px; /* Distance from the top */
  right: 20px; /* Distance from the right */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  z-index: 1000; /* Ensure it's above other content */
`;var h=function(e){let{theme:t,toggleTheme:i}=e;return Object(l.jsx)(d,{onClick:i,children:"light"===t?"\u2600\ufe0f":"\ud83c\udf19"})};i(20);const j={background:"#ffffff",text:"#40E0D0",worldLine:"#40E0D0",linkGlow:"#40E0D0"},b={background:"#000000",text:"#ff0000",worldLine:"#ff0000",linkGlow:"#ff0000"},u=o.b.div`
  background-color: ${e=>e.theme.background};
  color: ${e=>e.theme.text};
  min-height: 100vh;
  padding: 20px;
  position: relative;
`,x=o.b.div`
  position: absolute;
  left: 50%;
  top: 200px; /* Start below Section 1 */
  width: 2px;
  height: calc(100% - 200px); /* Adjust height to start from Section 1 */
  background-color: ${e=>e.theme.worldLine};
  z-index: 0;
`,m=o.b.div`
  margin: 50px 0;
  padding: 20px;
  position: relative;
  z-index: 1;
  max-width: 45%;
  background-color: ${e=>e.theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: ${e=>"right"===e.align?"50%":"5%"};
`,O=o.b.div`
  text-align: center;
  margin: 50px auto;
  padding: 20px;
  max-width: 600px;
  position: relative;
  z-index: 1;
  background-color: ${e=>e.theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,g=o.b.a`
  color: ${e=>e.theme.linkGlow};
  text-decoration: none;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0 0 5px ${e=>e.theme.linkGlow}, 0 0 10px ${e=>e.theme.linkGlow};
  }
`;var p=function(){const[e,t]=Object(n.useState)("light");return Object(l.jsx)(o.a,{theme:"light"===e?j:b,children:Object(l.jsxs)(u,{children:[Object(l.jsx)(h,{theme:e,toggleTheme:()=>{t("light"===e?"dark":"light")}}),Object(l.jsx)(x,{}),Object(l.jsx)(a,{children:Object(l.jsxs)(O,{children:[Object(l.jsx)("h1",{children:"Thushal Bharadwaj Nelamane Venkatesh"}),Object(l.jsx)("p",{children:"Virginia, USA | tvenkb@gmail.com | (703) 594-6142"}),Object(l.jsxs)("p",{children:[Object(l.jsx)(g,{href:"https://github.com/tvenk",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})," |"," ",Object(l.jsx)(g,{href:"https://www.linkedin.com/in/tbnv/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]})]})}),Object(l.jsx)(a,{children:Object(l.jsxs)(m,{align:"left",children:[Object(l.jsx)("h2",{children:"EDUCATION"}),Object(l.jsx)("p",{children:"Bachelor of Science in Information Technology - Information Security Concentration"}),Object(l.jsx)("p",{children:"George Mason University, Fairfax, VA | May 2023"}),Object(l.jsx)("ul",{children:Object(l.jsx)("p",{children:"Security-focused IT professional with hands-on experience in network security, SIEM implementation, and automation. Demonstrated expertise in threat detection, incident response, and security tools implementation."})})]})}),Object(l.jsx)(a,{children:Object(l.jsxs)(m,{align:"right",children:[Object(l.jsx)("h2",{children:"CERTIFICATIONS & SKILLS"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Certifications:"})," CompTIA Security+, Palo Alto Network based certs., TryHackMe SOC I"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Security Tools:"})," Wazuh SIEM, Elastic Stack, Snort IDS/IPS, CrowdSec, Palo Alto Firewalls"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Technical:"})," Python, PowerShell, SQL, Selenium, AWS, Terraform, Docker, Ansible"]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Systems:"})," Red Hat Linux, Windows, Unix | Tools: Jira, Confluence, SharePoint"]})]})]})}),Object(l.jsx)(a,{children:Object(l.jsxs)(m,{align:"left",children:[Object(l.jsx)("h2",{children:"PROFESSIONAL EXPERIENCE"}),Object(l.jsx)("h3",{children:"IT Network and Cybersecurity Intern | TDS Telecom (Remote) | May 2023 - May 2024"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Implemented Elasticsearch/Kibana security monitoring, reducing threat detection time by 60%."}),Object(l.jsx)("li",{children:"Engineered 400+ Kali Linux command detection rules in Elastic SIEM for enhanced SOC capabilities."}),Object(l.jsx)("li",{children:"Automated device integration using Python/REST APIs, improving efficiency by 90%."}),Object(l.jsx)("li",{children:"Developed security documentation for enterprise systems and custom Selenium automation scripts."}),Object(l.jsx)("li",{children:"Created manifest for decommissioning old firewall devices without causing any policy collisions."}),Object(l.jsx)("li",{children:"Utilized grok parsing for hundreds of production server data for Elasticsearch log ingest with 0 errors."})]}),Object(l.jsx)("h3",{children:"IT Student | Great Oaks Cleaning Solution (Remote) | December 2022 \u2013 May 2023"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Architected secure LAMP stack web application following OWASP guidelines."}),Object(l.jsx)("li",{children:"Implemented security-focused customer engagement system with 40% conversion improvement."})]})]})}),Object(l.jsx)(a,{children:Object(l.jsxs)(m,{align:"right",children:[Object(l.jsx)("h2",{children:"PERSONAL PROJECTS"}),Object(l.jsx)("h3",{children:"Cloud & Security Infrastructure"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Deployed secure AWS infrastructure using Terraform with automated security controls."}),Object(l.jsx)("li",{children:"Built comprehensive security lab with Crowdsec, SNORT IDS/IPS, and Wazuh SIEM."}),Object(l.jsx)("li",{children:"Developed Python-based financial analysis tools with secure data handling."})]})]})}),Object(l.jsx)(a,{children:Object(l.jsxs)(m,{align:"left",children:[Object(l.jsx)("h2",{children:"PROFESSIONAL DEVELOPMENT"}),Object(l.jsx)("h3",{children:"Clifford Chance Cyber Security Global Job Simulation"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Completed the 5-day Clifford Chance job simulation, assisting clients with legal issues related to cyber breaches."}),Object(l.jsx)("li",{children:"Assisted a major eCommerce business notification of stakeholders in compliance with GDPR regulation."}),Object(l.jsx)("li",{children:"Formulated defensive strategies for a client with data center operations for approximately 10,000 records."})]}),Object(l.jsx)("h3",{children:"AWS APAC Solutions Architecture Virtual Experience"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Designed a simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times."}),Object(l.jsx)("li",{children:"Described my proposed architecture in jargon-free language to ensure client understanding of how it works and how costs will be calculated."})]}),Object(l.jsx)("h3",{children:"JPMorgan Chase & Co. Cybersecurity Job Simulation"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Analyzed fraud datasets and built text-based ML models for spam email classification."}),Object(l.jsx)("li",{children:"Built a spam email classifier achieving an accuracy rate of 85%."}),Object(l.jsx)("li",{children:"Designed and developed a system to tighten access to sensitive information, reducing unauthorized access attempts by 30%."})]})]})})]})})};i(21);s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.88e94423.chunk.js.map