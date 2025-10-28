import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './CategoryProductListPage.module.css';
import { getProductos } from '../../services/api';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';

function CategoryProductListPage() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        window.scrollTo(0, 0);
        const data = await getProductos({ categoria_id: categoryId }); 
        setProductos(data);
        if (data.length > 0) {
          setCategoryName(data[0].categoria_nombre || `Categoría ${categoryId}`);
        } else {
            setCategoryName(`Categoría ${categoryId}`); 
        }
      } catch (err) {
        setError('Error al cargar los productos de esta categoría.');
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryProducts();
  }, [categoryId]);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <main>
        <div className={styles.categoryBanner}>
          <h1>{categoryName}</h1>
        </div>
        <div className={styles.container}>
          {productos.length > 0 ? (
            <div className={styles.productGrid}>
              {productos.map(producto => (
                <ProductCard key={producto.id} producto={producto} />
              ))}
            </div>
          ) : (
            <p>No hay productos en esta categoría.</p>
          )}
        </div>
      </main>
    </>
  );
}

export default CategoryProductListPage;