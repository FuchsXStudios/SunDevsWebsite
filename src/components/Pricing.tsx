import React from 'react';
import CountUp from './CountUp';

const Pricing: React.FC = () => {
  const features = [
    "Feature placeholder 1",
    "Feature placeholder 2",
    "Feature placeholder 3",
    "Feature placeholder 4",
    "Feature placeholder 5"
  ];

  return (
    <section id="pricing" className="glass-card">
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--secondary)' }}>Pricing</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }} className="glass-card">
        <h3 style={{ textAlign: 'center', color: 'var(--secondary)', fontSize: '28px' }}>Premium License</h3>
        <div style={{ fontSize: '36px', margin: '20px 0', color: 'var(--secondary)', textAlign: 'center' }}>
          $<CountUp from={0} to={49} duration={1.5} className="price-count" /><span style={{ fontSize: '16px' }}>/one-time</span>
        </div>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>Everything you need for your software license management.</p>
        <ul style={{ listStyle: 'none', textAlign: 'left', margin: '30px 0' }}>
          {features.map((feature, index) => (
            <li key={index} style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--secondary)', marginRight: '10px' }}>✓</span> {feature}
            </li>
          ))}
        </ul>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <a href="https://builtbybit.com/resources/sunlicense-license-management-system.58359/?ref=discover" className="button" target="_blank" rel="noopener noreferrer">Buy Now</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
