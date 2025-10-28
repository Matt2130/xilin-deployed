import React from 'react';
import styles from './XilinCalidad.module.css';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const bannerCaracteristicas = '/assets/Index_imgs/banner-caract.webp'; // Banner inicial
const calidadProductoImage = '/assets/Index_imgs/img1car2.png'; // Imagen del producto para la sección de calidad
const fondoVideoBanner = '/assets/Index_imgs/bannerfondo.webp'; // Fondo para el banner del video
const youtubeVideoId = 'vvpjgCGcOoU'; // ID del video de YouTube

const seguridadEstabilidad = [
  "Eficiencia mejorada del eje motriz tipo H más popular, diseño de estructura optimizado y eficiencia mejorada.",
  "Motor de accionamiento de CA de alta potencia y par grande, cuerpo de gran diámetro para exportar un par más grande, ranura de radiación de calor reservada para un mejor intercambio de calor en caso de uso prolongado.",
  "Pantalla multifuncional con tiempo de uso, código de falla, estado de la batería, información de funcionamiento de la carretilla elevadora.",
  "Motor de accionamiento AC sin escobillas, libre de mantenimiento; Baja corriente eléctrica, conducción silenciosa.",
  "Centro de gravedad bajo gracias a la batería reubicada, lo que refuerza en gran medida la estabilidad de la dirección.",
  "Preferencia del circuito de dirección, para garantizar la seguridad en cada giro cuando se conduce y levanta al mismo tiempo, y para ahorrar energía.",
  "Diseño de controlador dual, un controlador de conducción, el otro control de dirección y elevación.",
  "Carcasa metálica para una mejor protección.",
  "Luz LED completa"
];

const ergonomia = [
  "La estructura optimizada crea un quirófano grande y cómodo.",
  "Columna de volante ajustable, el conductor puede ajustar la posición según su necesidad.",
  "Interruptor de luces y volante integrados.",
  "Mástil de visión clara y amplia con buena visibilidad.",
  "Amortiguación inteligente de colapso de mástil."
];

function XilinCalidad() {
  const scrollToForm = () => {
    document.getElementById('form-contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section>
      {/* Bloque 1: Banner de "Movimiento" */}
      <div 
        className={styles.bannerMovimiento} 
        style={{ backgroundImage: `url(${bannerCaracteristicas})` }}
      >
        <div className={styles.overlay}>
          <h2 className={styles.bannerTitle}>MOVIENDO TU CARGA, IMPULSANDO TU ÉXITO</h2>
          <a href="/contacto">
            <button className={styles.ctaButton} onClick={scrollToForm}>
              Solicita una cotización
            </button>
          </a>
        </div>
      </div>

      {/* Bloque 2: Sección de "Búsqueda constante de la calidad" */}
      <div className={styles.calidadSection}>
        <div className={styles.calidadContainer}>
          <div className={styles.calidadImageWrapper}>
            <img src={calidadProductoImage} alt="Montacargas de calidad" className={styles.calidadImage} />
          </div>
          <div className={styles.calidadContent}>
            <h2 className={styles.calidadMainTitle}>Búsqueda constante de la calidad</h2>
            
            <h3 className={styles.calidadSubtitle}>SEGURIDAD Y ESTABILIDAD :</h3>
            <ul className={styles.calidadList}>
              {seguridadEstabilidad.map((item, index) => (
                <li key={`seg-${index}`} className={styles.calidadListItem}>{item}</li>
              ))}
            </ul>

            <h3 className={styles.calidadSubtitle}>ERGONOMÍA:</h3>
            <ul className={styles.calidadList}>
              {ergonomia.map((item, index) => (
                <li key={`erg-${index}`} className={styles.calidadListItem}>{item}</li>
              ))}
            </ul>
            <a href="/productos" className={styles.ctaButton}>
              Ver Productos
            </a>
          </div>
        </div>
      </div>

      {/* Bloque 3: Banner de Video de YouTube */}
      <div 
        className={styles.videoBanner} 
        style={{ backgroundImage: `url(${fondoVideoBanner})` }}
      >
        <div className={styles.videoWrapper}>
          <iframe 
            className={styles.youtubeIframe}
            src="https://www.youtube.com/embed/vvpjgCGcOoU" 
            title="Xilin Canton Fair Product Introduction Video" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default XilinCalidad;