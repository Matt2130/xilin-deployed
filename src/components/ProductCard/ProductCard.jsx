import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './ProductCard.module.css';

function ProductCard({ producto }) {
  if (!producto) {
    return null;
  }

  return (
    <Link to={`/productos/${producto.id}`} className={styles.cardLink}>
      <article className={styles.card}>
        <img src={producto.imagen_url} alt={producto.nombre} className={styles.productImage} />
        <div className={styles.cardContent}>
          <p className={styles.productName}>{producto.nombre}</p>
          {producto.modelo && <p className={styles.productModel}>MODELO: {producto.modelo}</p>}
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;