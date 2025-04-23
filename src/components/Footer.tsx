import React from 'react';

const Footer: React.FC = () => {
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '#docs' },
    { label: 'SLCD', href: '#slcd' },
    { label: 'Discord', href: '#discord' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' }
  ];

  return (
    <footer>
      <div className="container">
        <div className="logo" style={{ justifyContent: 'center', marginBottom: '20px' }}>
          <div className="logo-img">🟪</div>
          <div className="logo-text">SunLicense</div>
        </div>
        <div className="footer-links">
          {links.map((link, index) => (
            <a key={index} href={link.href}>{link.label}</a>
          ))}
        </div>
        <p className="creator">SunLicense by KASUN | Website created with ❤️ by Herr Fuchs</p>
      </div>
    </footer>
  );
};

export default Footer;
