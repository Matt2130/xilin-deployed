import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from './ProductDetailPage.module.css';
import { getProductoById } from '../../services/api';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const parseAndSanitizeMarkdown = (text) => {
    if (!text) return '';
    const rawHtml = marked(text);
    return DOMPurify.sanitize(rawHtml);
};

function ProductDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setError(null);
            try {
                window.scrollTo(0, 0);
                const data = await getProductoById(id);
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div>Cargando producto...</div>;
    if (error) return <div>Error: {error} <Link to="/productos">Volver al catálogo</Link></div>;
    if (!product) return <div>Producto no encontrado. <Link to="/productos">Volver al catálogo</Link></div>;

    return (
        <>
            <main className={styles.mainSectionProduct}>
                <div className={styles.categoryBanner}>
                    <h1>{product.categoria_nombre || 'Producto'}</h1>
                </div>

                <div className={styles.mainContent}>
                    <div className={styles.infoColumn}>
                        <h2>{product.nombre}</h2>
                        <p className={styles.model}>MODELO: {product.modelo}</p>
                        <div className={styles.actionButtons}>
                           <a href={product.ficha_tecnica_url} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.buttonYellow}`}>Ver ficha técnica</a>
                           <a href={product.manual_url} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.buttonYellow}`}>Ver Manual</a>
                           <button onClick={() => navigate('/contacto?producto=' + product.id)} className={`${styles.button} ${styles.buttonRed}`}>Solicitar cotización</button>
                           <a href="https://wa.me/524444117481?text=Hola%2C%20quiero%20más%20información" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.buttonGreen}`}><i className="bi bi-whatsapp"></i> Contactar a un asesor</a>
                        </div>
                        <img src={product.imagen_url} alt={`Imagen principal de ${product.nombre}`} className={styles.mainImage} />
                    </div>

                    <div className={styles.mediaColumn}>
                         <div className={styles.videoWrapperVertical}>
                             {product.video_url ? (
                                 <video
                                     className={styles.htmlVideo}
                                     src={product.video_url}
                                     controls 
                                     playsInline
                                     muted
                                     autoPlay 
                                     loop
                                 >
                                     Tu navegador no soporta la etiqueta de video.
                                 </video>
                             ) : (
                                 <div className={styles.noVideoPlaceholder}>Video no disponible</div>
                             )}
                         </div>
                    </div>
                </div>

                <section className={styles.detailsSection}>
                   <div className={styles.detailsContainer}>
                       <div className={styles.caracteristicasWrapper}>
                           <h2>BÚSQUEDA CONSTANTE DE LA CALIDAD</h2>
                           <div
                               className={styles.markdownContent}
                               dangerouslySetInnerHTML={{ __html: parseAndSanitizeMarkdown(product.caracteristicas) }}
                           />
                       </div>
                       <div className={styles.dimensionesWrapper}>
                           <h2>DIMENSIONES</h2>
                           {product.dimensiones_url ? (
                               <img src={product.dimensiones_url} alt={`Dimensiones de ${product.nombre}`} className={styles.dimensionesImage}/>
                           ) : (
                               <p>Dimensiones no disponibles.</p>
                           )}
                       </div>
                   </div>
                </section>
            </main>
        </>
    );
}

export default ProductDetailPage;