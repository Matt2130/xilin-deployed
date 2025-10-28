import React from 'react';
import styles from './MantenimientoSeccion.module.css';

const bannerDesktop = '/assets/banners/Desktop/bannerservicio.png';
const bannerMobile = '/assets/banners/Mobile/mantenimiento.png';

function MantenimientoSeccion() {
    return (
        <>
            <h1 className={styles.h1contacto}>SERVICIO DE MANTENIMIENTO</h1>
            <div className={styles.mantenimientoContainer}>

                <picture className={styles.banner}>
                    <source media="(max-width: 767px)" srcSet={bannerMobile} />
                    <source media="(min-width: 768px)" srcSet={bannerDesktop} />
                    <img src={bannerDesktop} alt="Servicios de Mantenimiento Xilin" />
                </picture>

                <div className={styles.contentWrapper}>
                    <h1 className={styles.mainTitle}>SERVICIOS DE MANTENIMIENTO XILIN</h1>
                    <p className={styles.introText}>
                        Mantén tu montacargas en óptimas condiciones y evita costosos tiempos de inactividad con nuestro servicio de mantenimiento especializado.
                    </p>

                    <h2 className={styles.sectionTitle}>¿CADA CUÁNTO SE DEBE REALIZAR EL SERVICIO?</h2>
                    <ul className={styles.serviceList}>
                        <li>Primer mantenimiento: <strong>A las 300 horas de uso</strong></li>
                        <li>Segundo mantenimiento: <strong>A las 600 horas de uso</strong></li>
                        <li>Tercer mantenimiento: <strong>A las 1,000 horas de uso</strong></li>
                        <li>Después de eso, <strong>cada 1,000 horas</strong> es necesario un nuevo servicio para garantizar el máximo rendimiento</li>
                    </ul>

                    <h2 className={styles.sectionTitle}>
                        LLENA EL FORMULARIO Y UN AGENTE TE CONTACTARÁ<br/>PARA PROGRAMAR TU MANTENIMIENTO.
                    </h2>

                    <div className={styles.directContact}>
                        <a href="https://wa.me/524448298005" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
                            <i className={`bi bi-whatsapp ${styles.whatsappIcon}`}></i> 
                        </a>
                        <p className={styles.contactText}>
                            <strong>¿Prefieres agendar directamente?</strong><br />
                            Llámanos al <a href="tel:+524448298005">+52 444 829 8005</a> y agenda tu cita hoy mismo.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MantenimientoSeccion;