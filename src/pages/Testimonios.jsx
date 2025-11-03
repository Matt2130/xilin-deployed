import React from 'react';
import styles from '../components/Testimonios/Testimonios.module.css';

const testimonialsData = [
  {
    id: 1,
    clientName: 'BEST PACK SOLUTIONS',
    videoUrl: 'https://hicomerce.com.mx/wp-content/uploads/2025/07/BEST%20PACK%20SOLUTIONS.mp4',
    posterUrl: '/assets/img/poster.webp'
  },
  {
    id: 2,
    clientName: 'FORTIPACK',
    videoUrl: 'https://hicomerce.com.mx/wp-content/uploads/2025/07/FORTIPACK-%20Testimonial%20Xilin.mp4',
    posterUrl: '/assets/img/poster.webp'
  },
  {
    id: 3,
    clientName: 'LLÉVAME TRANSPORTES',
    videoUrl: 'https://hicomerce.com.mx/wp-content/uploads/2025/07/test3_ONhUAWy2.mp4',
    posterUrl: '/assets/img/poster.webp'
  }  
];

function Testimonios() {
  return (
    <>
        <title>Xilin Testimonios | Venta y Renta de Montacargas Eléctricos</title>
        <meta name="description" content="Testimonios de nuestros productos" />
        <meta property="og:title" content="Xilin Montacargas | Venta y Renta" />
      <h1 className={styles.h1testimonios}>TESTIMONIOS</h1>

      <main className={styles.pageContainer}>
        <div className={styles.gridContainer}>
          {testimonialsData.map((video) => (
            <div key={video.id} className={styles.videoCard}>
              
              <div className={styles.clientTag}>
                {video.clientName}
              </div>

              <div className={styles.videoWrapper}>
                <video
                  className={styles.videoPlayer}
                  src={video.videoUrl}
                  poster={video.posterUrl}
                  controls
                  playsInline
                  loop
                  muted
                >
                  Tu navegador no soporta la etiqueta de video.
                </video>
              </div>

            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Testimonios;