import React from 'react';
import styles from './BeneficiosIndex.module.css';

const benefitsData = [
  {
    title: 'Eficiencia Energética Superior:',
    description: 'Nuestros montacargas eléctricos recuperan energía en cada frenado, extendiendo la vida útil de la batería y reduciendo costos operativos.',
  },
  {
    title: 'Durabilidad y Resistencia:',
    description: 'Diseñados para soportar las condiciones extremas, con motores sellados resistentes al polvo y la humedad.',
  },
  {
    title: 'Reducción de Costos:',
    description: 'Nuestros montacargas eléctricos recuperan energía en cada frenado, extendiendo la vida útil de la batería y reduciendo costos operativos.',
  },
];

const mainImageUrl = '/assets/Index_imgs/IMG_3383.svg';
const checkIconUrl = '/assets/icons/shield-check.svg';

function BeneficiosIndex() {
  
  const scrollToForm = () => {
    document.getElementById('form-contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>BENEFICIOS CLAVE DE NUESTROS MONTACARGAS ELÉCTRICOS</h2>
        
        <div className={styles.contentWrapper}>
          {/* Columna de la Imagen */}
          <div className={styles.imageWrapper}>
            <img src={mainImageUrl} alt="Montacargas Xilin mostrando sus beneficios" />
          </div>

          {/* Columna de los Beneficios */}
          <div className={styles.textWrapper}>
            {benefitsData.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <img src={checkIconUrl} alt="Ícono de beneficio" className={styles.icon} />
                <div className={styles.benefitText}>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
            <a href="/contacto">
              <button className={styles.ctaButton} onClick={scrollToForm}>
                Solicita una cotización
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeneficiosIndex;