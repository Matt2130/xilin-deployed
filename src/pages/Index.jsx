import React from "react";

import HeroCarousel from "../components/Hero/HeroCarousel";
import ContactForm from "../components/ContacForm/ContactForm";

function IndexPage() {
    return (
        <>
            <main>
                <HeroCarousel />
                <ContactForm />
            </main>
        </>
    )
}

export default IndexPage;