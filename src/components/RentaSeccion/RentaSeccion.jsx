import React from 'react';
import styles from './RentaSeccion.module.css';

const BenefitIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 89 88" fill="none">
        <path d="M22.9821 27.156C24.2365 38.2216 27.6187 54.5957 32.4138 57.7579C38.1079 61.5212 42.4834 63.9384 44.4957 65.0136C46.5207 63.9384 50.8705 61.5212 56.5775 57.7579C61.3726 54.5957 64.7549 38.2216 66.0093 27.156L44.4957 22.4275L22.9821 27.156ZM57.6307 34.6064L44.9195 53.4612L34.4217 43.0771L38.2664 39.2757L44.0761 45.0201L53.1097 31.622L57.635 34.6064H57.6307Z" fill="black"/>
        <path d="M44.5 0C19.9252 0 0 19.7014 0 44C0 68.2986 19.9252 88 44.5 88C69.0748 88 89 68.2986 89 44C89 19.7014 69.0748 0 44.5 0ZM71.6778 25.2934C71.3781 28.4514 68.5696 56.3102 59.5959 62.2409C55.1262 65.2422 50.4938 67.9896 45.7116 70.4745L44.4957 71.0756L43.2798 70.4745C38.4933 67.9854 33.8566 65.2338 29.3827 62.2282C20.409 56.3102 17.6005 28.4514 17.3094 25.2934L17.1039 22.9398L44.4914 16.9201L71.8876 22.9398L71.6735 25.2934H71.6778Z" fill="black"/>
    </svg>
);


const benefitsData = [
    { title: "Mantenimiento preventivo", description: "Sin costos adicionales" },
    { title: "Cambios de llantas anual", description: "Para garantizar un rendimiento seguro y eficiente." },
    { title: "Diagnóstico técnico rápido", description: "Soluciones ágiles para cualquier inconveniente." },
    { title: "Certificación DC-3", description: "Capacitación anual para tres operadores por equipo." }
];

const topBannerDesktop = '/assets/banners/Desktop/bannerservicio.png';
const topBannerMobile = '/assets/banners/Mobile/banner-mobile-renta.png';
const middleImage = '/assets/banners/Desktop/montacargas-renta.jpg';

function RentaSeccion() {
    const scrollToForm = () => {
        document.getElementById('form-contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <section className={styles.topBanner}>
                <picture>
                    <source media="(max-width: 767px)" srcSet={topBannerMobile} />
                    <source media="(min-width: 768px)" srcSet={topBannerDesktop} />
                    <img src={topBannerDesktop} alt="Promoción de Montacargas Eléctricos Xilin" className={styles.topBannerImage} />
                </picture>
                <div className={styles.overlay}>
                    <h1 className={styles.topBannerTitle}>
                        ¡MAXIMIZA LA EFICIENCIA EN TU OPERACIÓN INDUSTRIAL CON<br/>
                        LOS MONTACARGAS ELÉCTRICOS XILIN!
                    </h1>
                    <a href="/contacto">
                        <button className={styles.ctaButton} onClick={scrollToForm}>
                            Solicita una cotización
                        </button>
                    </a>
                </div>
            </section>

            <section className={styles.efficiencySection}>
                <div className={styles.efficiencyContainer}>
                    <div className={styles.efficiencyImageWrapper}>
                        <img src={middleImage} alt="Montacargas eléctrico Xilin en almacén" />
                    </div>
                    <div className={styles.efficiencyTextWrapper}>
                        <h2 className={styles.efficiencyTitle}>
                            EFICIENCIA, SOSTENIBILIDAD Y<br/>
                            TECNOLOGÍA AVANZADA<br/>
                            EN MONTACARGAS ELÉCTRICOS
                        </h2>
                        <a href="/productos" className={styles.ctaButton}>Ver productos</a>
                    </div>
                </div>
            </section>

            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContainer}>
                    <h2 className={styles.benefitsMainTitle}>BENEFICIOS DE RENTAR UN MONTACARGAS XILIN</h2>
                    <p className={styles.benefitsSubtitle}>TODO LO QUE NECESITAS INCLUIDO</p>
                    <div className={styles.benefitsGrid}>
                        {benefitsData.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.iconWrapper}>
                                    <BenefitIcon />
                                </div>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitDescription}>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default RentaSeccion;