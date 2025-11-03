import React from 'react';
import styles from './BlogPostCard.module.css';

function BlogPostCard({ post }) {
  const formattedDate = new Date(post.fecha_publicacion).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const contenidoLimpio = post.contenido_corto.replace(/#/g, '');

  return (
    <article className={`${styles.card} ${!post.banner_url ? styles.noBanner : ''}`}>
      {post.banner_url && (
        <img src={post.banner_url} alt={`Banner para ${post.titulo}`} className={styles.banner} loading='lazy' />
      )}
      <div className={styles.content}>
        <h2 className={styles.title}>{post.titulo}</h2>
        <div className={styles.meta}>
          <img src={post.autor_foto_url} alt={post.autor_nombre} className={styles.authorPhoto} loading='lazy' />
          <span>{formattedDate} por {post.autor_nombre}</span>
        </div>
        <p className={styles.snippet}>{contenidoLimpio}...</p>
        <a href={`/blog/${post.id}`} className={styles.readMore}>Leer más</a>
      </div>
    </article>
  );
}

export default BlogPostCard;