import React from "react";

import HeroCarousel from "../components/Hero/HeroCarousel";
import ContactForm from "../components/ContacForm/ContactForm";
import CategoryShowcase from "../components/CategoryShowcase/CategoryShowcase";
import ProductsCarousel from "../components/ProductsCarousel/ProductsCarousel";
import BeneficiosIndex from "../components/BeneficiosIndex/BeneficiosIndex";
import DualBanner from "../components/DualBanner/DualBanner";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import XilinCalidad from "../components/XilinCalidadComponente/XilinCalidad";

function IndexPage() {
    return (
        <>
            <main>
                <title>Xilin Montacargas | Venta y Renta de Montacargas Eléctricos</title>
                <meta name="description" content="Descubre todo lo que Xilin Montacargas tiene para ti" />
                <meta property="og:title" content="Xilin Montacargas | Venta y Renta" />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '55px', width: '100%', background: '#fdd22b' }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: '900', color: 'black', margin: '5%' }}>Hasta 18 meses de garantía</p>
                </div>
                <HeroCarousel />
                <CategoryShowcase />
                <BeneficiosIndex />
                <ProductsCarousel />
                <DualBanner />
                <FeaturesSection />
                <XilinCalidad />
                <ContactForm />
            </main>
        </>
    )
}

export default IndexPage;