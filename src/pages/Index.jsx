import React from "react";

import HeroCarousel from "../components/Hero/HeroCarousel";
import ContactForm from "../components/ContacForm/ContactForm";
import CategoryShowcase from "../components/CategoryShowcase/CategoryShowcase";
import ProductsCarousel from "../components/ProductsCarousel/ProductsCarousel";

function IndexPage() {
    return (
        <>
            <main>
                <HeroCarousel />
                <CategoryShowcase />
                <ProductsCarousel />
                <ContactForm />
            </main>
        </>
    )
}

export default IndexPage;