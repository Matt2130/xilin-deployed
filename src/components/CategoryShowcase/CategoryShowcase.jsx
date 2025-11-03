import React, { useState, useEffect } from 'react';
import styles from './CategoryShowcase.module.css';
import { getCategorias } from '../../services/api';

function CategoryShowcase() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const data = await getCategorias();
      setCategorias(data);
    };
    fetchCategorias();
  }, []);

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>CONOCE NUESTRAS CATEGORIAS</h2>
        <div className={styles.grid}>
          {categorias.map((categoria) => (
            <div key={categoria.id} className={styles.card}>
              <img src={categoria.imagen_url} alt={`Imagen de la categoría ${categoria.nombre}`} className={styles.cardImage} loading='lazy' />
              <h3 className={styles.cardTitle}>{categoria.nombre}</h3>
              <a href={`/productos/categoria/${categoria.id}`} className={styles.cardButton}>Ver Productos</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryShowcase;