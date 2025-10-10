import React, { useState } from 'react';
import styles from './Header.module.css';

function Header({ logoUrl }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* El logo siempre estará a la izquierda */}
        <a href="/" className={styles.logo}>
          <img src={logoUrl} alt="Logo de la empresa Xilin" />
        </a>

        {/* Contenedor de navegación que se activará en móvil */}
        <nav className={`${styles.navmenu} ${menuOpen ? styles.active : ''}`}>
          <ul>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/renta">Renta</a></li>
            <li><a href="/servicio-mantenimiento">Servicio de Mantenimiento</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/visita-nuestra-tienda">Visita Nuestra Tienda</a></li>
            <li><a href="https://wa.me/524444117481">Contáctanos al 444 411 7481 <i className="bi bi-whatsapp"></i></a></li>
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/testimonios">Testimonios</a></li>
          </ul>
        </nav>

        <i
          className={`bi bi-list ${styles.mobileNavToggle}`}
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
      </div>
    </header>
  );
}

export default Header;