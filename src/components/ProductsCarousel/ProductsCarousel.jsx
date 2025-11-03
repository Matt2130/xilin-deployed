import React, { useState, useEffect } from 'react';
import { getFeaturedProductos } from '../../services/api';
import styles from './ProductsCarousel.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


function ProductsCarousel() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getFeaturedProductos();
      setProductos(data);
    };
    fetchProductos();
  }, []);

  return (
    <section className={styles.carouselSection}>
      <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.title}>DESCUBRE NUESTROS PRODUCTOS</h2>
            <a href="/productos" className={styles.viewAll}>Ver Todos</a>
        </div>
        
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20} 
            slidesPerView={1.2} 
            centeredSlides={true}
            loop={productos.length > 5} 
            
            navigation={true} 
            pagination={{ clickable: true }}
            
            breakpoints={{
                    680: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    centeredSlides: false,
                    },
                    992: {
                    slidesPerView: 4, 
                    spaceBetween: 30,
                    },
                    1200: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                    },
                }}
            className={styles.mySwiper}
          >
            {productos.map((producto) => (
              <SwiperSlide key={producto.id} className={styles.slide}>
                <img src={producto.imagen_url} alt={producto.nombre} className={styles.productImage} loading='lazy' />
                <p className={styles.productName}>{producto.nombre}</p>
                <p className={styles.productModel}>MODELO: {producto.modelo}</p>
                <a href={producto.ficha_tecnica_url} className={styles.specLink} target="_blank" rel="noopener noreferrer">Ver Ficha técnica</a>
                <a href="/contacto"><button sr className={styles.buyButton}>Solicitar Cotización</button></a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ProductsCarousel;