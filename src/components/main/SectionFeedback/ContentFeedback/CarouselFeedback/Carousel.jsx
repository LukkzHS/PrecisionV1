import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ children, visibleSlides = 4, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalChildren = React.Children.count(children);

  const prevSlide = () => {
    const newIndex = currentIndex - 1;
    if (newIndex < 0) {
      setCurrentIndex(totalChildren - visibleSlides); 
    } else {
      setCurrentIndex(newIndex);
    }
  };
  
  const nextSlide = () => {
    const newIndex = currentIndex + 1;
    if (newIndex >= totalChildren) {
      setCurrentIndex(0);
    } else if (newIndex > totalChildren - visibleSlides) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    let autoSlide;

    if (autoPlay) {
      autoSlide = setInterval(() => {
        nextSlide();
      }, interval);
    }

    return () => clearInterval(autoSlide);
  }, [currentIndex, autoPlay, interval]);

  const calculateTranslateValue = () => {
    if (currentIndex > totalChildren - visibleSlides) {
      return -(100 / visibleSlides) * (totalChildren - visibleSlides);
    } else {
      return -(100 / visibleSlides) * currentIndex;
    }
  };

  const transformValue = calculateTranslateValue();

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.leftArrow}>‹</button>
      <div
        className={styles.carouselContent}
        style={{
          transform: `translateX(${transformValue}%)`,
          width: `${(100 / visibleSlides) * totalChildren}%`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            style={{ '--visible-slides': visibleSlides }}
          >
            {child}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className={styles.rightArrow}>›</button>
    </div>
  );
};

export default Carousel;
