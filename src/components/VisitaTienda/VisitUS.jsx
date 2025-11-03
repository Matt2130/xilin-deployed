import React from 'react';
import styles from './VisitUS.module.css';

const images = [
    '/assets/VisitUS/tienda1.webp',
    '/assets/VisitUS/tienda2.webp',
    '/assets/VisitUS/tienda3.webp',
    '/assets/VisitUS/tienda4.webp',
    '/assets/VisitUS/tienda5.webp',
    '/assets/VisitUS/tienda6.webp',
];

const googleMapsLink = "https://www.google.com/maps/dir//XILIN+Montacargas+El%C3%A9ctricos.,+Carr.+M%C3%A9xico+-+Piedras+Negras,+Villa+de+Pozos+5415,+78395+San+Luis+Potos%C3%AD/@22.091143,-100.881937,13z/data=!4m17!1m7!3m6!1s0x842aa39d684e54fb:0x51d2c2fa11c6045c!2sXILIN+Montacargas+El%C3%A9ctricos.!8m2!3d22.0911434!4d-100.8819373!16s%2Fg%2F11wc31vwz6!4m8!1m0!1m5!1m1!1s0x842aa39d684e54fb:0x51d2c2fa11c6045c!2m2!1d-100.8819373!2d22.0911434!3e0?hl=es&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D";

function VisitUS() {
    return (
        <>
            <h1 className={styles.h1contacto}>VISITA NUESTRO SHOWROOM</h1>

            <main className={styles.mainContent}>
                <div className={styles.imageGrid}>
                    {images.map((imgSrc, index) => (
                        <div key={index} className={`${styles.gridItem} ${styles[`item${index + 1}`]}`}>
                            <img src={imgSrc} alt={`Showroom Xilin - Imagen ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className={styles.locationInfo}>
                    <h2 className={styles.locationTitle}>VISITA NUESTRA TIENDA</h2>
                    <p className={styles.address}>
                        Carr. México - Piedras Negras, Villa de Pozos<br />
                        5415 78395 San Luis Potosí, Mexico
                    </p>
                    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className={styles.directionsButton}>
                        Obten Direcciones
                    </a>
                </div>
            </main>
        </>
    );
}

export default VisitUS;