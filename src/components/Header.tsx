import React, { useState, useEffect, useRef } from 'react';
import { MenuItemProps } from '../types';

const MenuItem: React.FC<MenuItemProps> = ({ href, label, index }) => {
  return (
    <a href={href} className="menu-item" data-index={index}>
      {label}
    </a>
  );
};

const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const menuItems = [
    { href: '#features', label: 'Features', index: 0 },
    { href: '#pricing', label: 'Pricing', index: 1 },
    { href: '#docs', label: 'Documentation', index: 2 },
    { href: '#community', label: 'Community', index: 3 }
  ];

  const updateMenuSlider = (index: number) => {
    if (!menuRef.current || !sliderRef.current) return;
    
    const menuItem = menuRef.current.children[index + 1] as HTMLElement; // +1 because first child is the slider
    if (menuItem) {
      sliderRef.current.style.width = `${menuItem.offsetWidth}px`;
      sliderRef.current.style.left = `${menuItem.offsetLeft}px`;
    }
  };

  useEffect(() => {
    updateMenuSlider(activeIndex);
  }, [activeIndex]);

  const handleMenuItemHover = (index: number) => {
    updateMenuSlider(index);
  };

  const handleMenuMouseLeave = () => {
    updateMenuSlider(activeIndex);
  };

  const handleMenuItemClick = (index: number, href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveIndex(index);
    
    const targetId = href;
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header>
      <nav className="glass-card">
        <div className="logo">
          <div className="logo-img">🟪</div>
          <div className="logo-text">SunLicense</div>
        </div>
        <div className="menu" ref={menuRef} onMouseLeave={handleMenuMouseLeave}>
          <div className="menu-slider" ref={sliderRef}></div>
          {menuItems.map((item) => (
            <a 
              key={item.index}
              href={item.href} 
              className="menu-item" 
              data-index={item.index}
              onMouseEnter={() => handleMenuItemHover(item.index)}
              onClick={(e) => handleMenuItemClick(item.index, item.href, e)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
