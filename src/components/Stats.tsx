import React from 'react';
import CountUp from './CountUp';
import { StatProps } from '../types';

const Stat: React.FC<StatProps> = ({ value, label, prefix = '', suffix = '' }) => {
  return (
    <div className="stat-item glass-card">
      <div className="stat-value">
        {prefix}<CountUp from={0} to={value} duration={2} separator="," />{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { value: 5000, label: "Active Users", suffix: "+" },
    { value: 99, label: "Security Score", suffix: "%" },
    { value: 24, label: "Support", suffix: "/7" }
  ];

  return (
    <section className="stats-section glass-card">
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--secondary)' }}>By The Numbers</h2>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <Stat 
            key={index} 
            value={stat.value} 
            label={stat.label} 
            prefix={stat.prefix} 
            suffix={stat.suffix} 
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
