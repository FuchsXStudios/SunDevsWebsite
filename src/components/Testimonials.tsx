import React, { useEffect, useState } from 'react';
import { TestimonialProps } from '../types';

const Testimonial: React.FC<TestimonialProps & { isActive: boolean }> = ({ text, author, isActive }) => {
  return (
    <div className={`testimonial-slide ${isActive ? 'active' : ''}`}>
      <div className="testimonial-content">
        <p className="testimonial-text">{text}</p>
        <p className="testimonial-author">{author}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: '"SunLicense has revolutionized the way we manage our software licenses. The integration process was incredibly easy and the support is top-notch."',
      author: 'Placeholder Name, Placeholder Company'
    },
    {
      text: '"The security features of SunLicense have helped us drastically reduce piracy of our software. We were able to increase our revenue by 40% in just three months."',
      author: 'Placeholder Name, Placeholder Company'
    },
    {
      text: '"As a small startup, we were looking for a cost-effective but reliable licensing solution. SunLicense has exceeded all our expectations and grows with our business."',
      author: 'Placeholder Name, Placeholder Company'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials glass-card">
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--secondary)' }}>What Our Customers Say</h2>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            text={testimonial.text}
            author={testimonial.author}
            isActive={index === currentSlide}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
