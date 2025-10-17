import React from 'react';
import styles from './DualBanner.module.css';

const bannerData = [
  {
    imageUrl: '/assets/Index_imgs/banner2.svg',
    title: 'Maximiza la eficiencia en tu operación industrial con los montacargas eléctricos Xilin',
    buttonLink: '/productos?categoria=montacargas-electricos',
  },
  {
    imageUrl: '/assets/Index_imgs/banner1.svg',
    title: 'Maximiza la eficiencia en tu operación industrial con los hombre parado de Xilin',
    buttonLink: '/productos?categoria=hombre-parado',
  },
];

function DualBanner() {
  return (
    <>
    <section className={styles.dualBannerSection}>
        <div className={styles.container}>
            {bannerData.map((item, index) => (
            <div key={index} className={styles.card}>
                <img src={item.imageUrl} alt={item.title} className={styles.cardImage} />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <a href={item.buttonLink} className={styles.ctaButton}>
                Ver Productos
                </a>
            </div>
            ))}
        </div>
    </section>                
    </>
  );
}

export default DualBanner;