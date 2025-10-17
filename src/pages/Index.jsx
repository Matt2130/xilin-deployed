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