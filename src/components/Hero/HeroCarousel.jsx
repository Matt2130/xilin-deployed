import React, { useState, useEffect, useRef } from 'react';
import styles from './HeroCarousel.module.css';

const slidesData = [
  {
    desktopImage: '/assets/banners/Desktop/banner1.webp',
    mobileImage: '/assets/banners/Mobile/banner1mob.webp',
    alt: 'Banner de promoción de montacargas eléctricos con texto de reduce costos',
  },
  {
    desktopImage: '/assets/banners/Desktop/banner2.webp',
    mobileImage: '/assets/banners/Mobile/banner2mob.webp',
    alt: 'Banner de promoción de equipos de almacén',
  },
  {
    desktopImage: '/assets/banners/Desktop/banner3.webp',
    mobileImage: '/assets/banners/Mobile/banner3mob.webp',
    alt: 'Banner de promoción de equipos de almacén',
  }
];

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1)),
      5000 // Cambia cada 5 segundos
    );
    return () => resetTimeout();
  }, [currentIndex]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slidesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slidesData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section 
      className={styles.carouselContainer}
      onMouseEnter={resetTimeout} // Pausa al pasar el mouse
    >
      <div className={styles.slider} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slidesData.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
              <source media="(min-width: 769px)" srcSet={slide.desktopImage} />
              <img src={slide.desktopImage} alt={slide.alt} className={styles.slideImage} loading='lazy' />
            </picture>
          </div>
        ))}
      </div>
      
      <button aria-label="Diapositiva anterior" className={`${styles.arrow} ${styles.leftArrow}`} onClick={goToPrevious}>❮</button>
      <button aria-label="Siguiente diapositiva" className={`${styles.arrow} ${styles.rightArrow}`} onClick={goToNext}>❯</button>

      <div className={styles.dotsContainer}>
        {slidesData.map((_, slideIndex) => (
          <div 
            key={slideIndex} 
            className={`${styles.dot} ${currentIndex === slideIndex ? styles.activeDot : ''}`}
            onClick={() => goToSlide(slideIndex)}
            role="button"
            aria-label={`Ir a la diapositiva ${slideIndex + 1}`}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;