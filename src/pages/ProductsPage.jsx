import React from "react";
import ProductsCarousel from "../components/ProductsCarousel/ProductsCarousel";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import BeneficiosIndex from "../components/BeneficiosIndex/BeneficiosIndex";
import CategoryShowcase from "../components/CategoryShowcase/CategoryShowcase";

function Products() {
    return (
        <>
            <main>
                <title>Xilin Productos | Venta y Renta de Montacargas Eléctricos</title>
                <meta name="description" content="Descubre todos los productos Xilin que tenemos" />
                <meta property="og:title" content="Xilin Montacargas | Venta y Renta" />
            <picture>
                    <source 
                        media="(max-width: 768px)" 
                        srcSet="/assets/banners/Mobile/banner3mob.webp" 
                    />
                    <source 
                        media="(min-width: 769px)" 
                        srcSet="/assets/banners/Desktop/banner3.webp" 
                    />
                    <img 
                        src="/assets/banners/Desktop/banner3.webp" 
                        alt="Banner promocional de productos Xilin" 
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </picture>
                <CategoryShowcase />
                <ProductsCarousel />
                <FeaturesSection />
                <BeneficiosIndex />
            </main>
        </>
    )
}

export default Products;