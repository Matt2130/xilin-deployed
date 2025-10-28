import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { getCategorias } from '../../services/api';

/* Imagenes */
import logoBlancoUrl from '/assets/logoxilinblanco.webp'; 
import metodosPagoUrl from '/assets/pagosVisa.png'; 

function Footer() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const data = await getCategorias();
      setCategorias(data);
    };
    fetchCategorias();
  }, []); 
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Columna 1: Logo */}
        <div className={styles.footerColumn}>
          <a href="/" aria-label="Página de inicio">
            <img src={logoBlancoUrl} alt="Logo Xilin en color blanco" className={styles.logo} />
          </a>
        </div>

        {/* Columna 2: Categorías */}
      <div className={styles.footerColumn}>
          <h4>Categorías</h4>
          <ul>
            {categorias.map(cat => (
              <li key={cat.id}>
                <Link to={`/productos/categoria/${cat.id}`}>
                  {cat.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Legales */}
        <div className={styles.footerColumn}>
          <h4>Legales</h4>
          <ul>
            <li><a href="/assets/Documentos/aviso-de-privacidad.pdf" target="_blank" rel="noopener noreferrer">Aviso de Privacidad</a></li>
            <li><a href="/assets/Documentos/Terminos & Condiciones.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a></li>
            <li><a href="/assets/Documentos/Poliza de Garantia Xilin.pdf" target="_blank" rel="noopener noreferrer">Política de Garantía</a></li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className={styles.footerColumn}>
          <h4>Contacto</h4>
          <ul>
            <li><a href="https://wa.me/524444117481" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i> +52 444 411 7481</a></li>
          </ul>
        </div>

        {/* Columna 5: Pagos Seguros y Redes Sociales */}
        <div className={styles.footerColumn}>
          <h4>Pagos Seguros</h4>
          <img src={metodosPagoUrl} alt="Métodos de pago: Visa y Mastercard" className={styles.paymentMethods} />

          <h4 className={styles.socialsTitle}>Síguenos</h4>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/profile.php?id=61564573953947" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
            <a href="https://www.linkedin.com/company/xilinslp/posts/?feedView=all" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/xilinslp/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className={styles.copyrightBar}>
        <p>(C) {new Date().getFullYear()} Xilin Mexico. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;