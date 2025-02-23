import React from 'react';
import FadeInSection from './FadeInSection';

function Portfolio() {
  return (
    <div>
      <FadeInSection>
        <div>
          <h2>Cloud & Security Infrastructure</h2>
          <p>Deployed secure AWS infrastructure using Terraform with automated security controls.</p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div>
          <h2>Professional Development</h2>
          <p>Completed the Clifford Chance Cyber Security Global Job Simulation.</p>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Portfolio;
