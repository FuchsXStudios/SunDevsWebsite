import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="glass-card" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--secondary)' }}>Ready to Protect Your Software?</h2>
        <p style={{ marginBottom: '30px' }}>Start with SunLicense today and discover how easy and secure license management can be.</p>
        <div>
          <a href="https://builtbybit.com/resources/sunlicense-license-management-system.58359/?ref=discover" className="button" target="_blank" rel="noopener noreferrer">Get Started</a>
          <a href="#docs" className="button button-outline">Documentation</a>
          <a href="#slcd" className="button button-outline">Community Docs</a>
          <a href="#discord" className="button button-outline">Discord Support</a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
