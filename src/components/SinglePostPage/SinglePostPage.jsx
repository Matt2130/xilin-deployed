import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SinglePostPage.module.css';
import { getBlogPostById } from '../../services/api';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const getSanitizedHtml = (markdownContent) => {
  if (!markdownContent) return '';
  const rawHtml = marked(markdownContent);
  const cleanHtml = DOMPurify.sanitize(rawHtml, {
    ADD_TAGS: ['video', 'source', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'div', 'h4'],
    ADD_ATTR: ['controls', 'width', 'height', 'src', 'type', 'class', 'allowfullscreen', 'frameborder', 'allow', 'poster'],
  });
  return cleanHtml;
};

function SinglePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const data = await getBlogPostById(id);
      setPost(data);
      setLoading(false);
    };
    window.scrollTo(0, 0);
    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Cargando artículo...</div>;
  }
  if (!post) {
    return <div>Artículo no encontrado.</div>;
  }
  
  const formattedDate = new Date(post.fecha_publicacion).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <>
      <main>
        <article className={styles.articleContainer}>
          <h1 className={styles.title}>{post.titulo}</h1>
          <div className={styles.meta}>
            <img src={post.autor_foto_url} alt={post.autor_nombre} className={styles.authorPhoto} />
            <div className={styles.authorInfo}>
              <strong>{post.autor_nombre}</strong>
              <span>{post.autor_puesto}</span>
              <time dateTime={post.fechapublicacion}>{formattedDate}</time>
            </div>
          </div>
          
          {post.banner_url && (
            <img src={post.banner_url} alt={`Banner para ${post.titulo}`} className={styles.banner} />
          )}
          
          <div 
            className={styles.content} 
            dangerouslySetInnerHTML={{ __html: getSanitizedHtml(post.contenido) }} 
          />
        </article>
      </main>
    </>
  );
}

export default SinglePostPage;