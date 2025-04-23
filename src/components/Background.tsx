import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="background">
      <div className="gradient-sphere sphere-1"></div>
      <div className="gradient-sphere sphere-2"></div>
      <div className="gradient-sphere sphere-3"></div>
    </div>
  );
};

export default Background;

// src/components/FloatingElements.tsx
import React, { useEffect } from 'react';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    const floatingElements = document.querySelectorAll('.floating-element');
    const maxMovement = 30; // Maximum movement in pixels

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      floatingElements.forEach((element, index) => {
        // Calculate movement factor (different for each element)
        const factor = 0.02 + (index * 0.01);
        
        // Calculate normalized cursor position (-1 to 1)
        const normalizedX = (mouseX / windowWidth) * 2 - 1;
        const normalizedY = (mouseY / windowHeight) * 2 - 1;
        
        // Apply movement with different factors for each element
        const moveX = normalizedX * maxMovement * factor;
        const moveY = normalizedY * maxMovement * factor;
        
        // Apply transform with slight delay for more natural movement
        setTimeout(() => {
          (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
        }, index * 50);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="floating-elements">
      <img src="/api/placeholder/200/200" alt="Floating element" className="floating-element floating-image" style={{ top: '30%', left: '20%' }} />
      <img src="/api/placeholder/200/200" alt="Floating element" className="floating-element floating-image" style={{ top: '60%', left: '70%' }} />
      <img src="/api/placeholder/200/200" alt="Floating element" className="floating-element floating-image" style={{ top: '20%', left: '80%' }} />
    </div>
  );
};

export default FloatingElements;
