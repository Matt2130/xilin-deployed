import React from "react";
import BeneficiosIndex from "../components/BeneficiosIndex/BeneficiosIndex";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import ContactForm from "../components/ContacForm/ContactForm";
import RentaSeccion from "../components/RentaSeccion/RentaSeccion";

function RentaXilin() {
    return (
        <>
            <main>
                <RentaSeccion />
                <FeaturesSection />
                <BeneficiosIndex />
                <ContactForm />
            </main>
        </>
    )
}

export default RentaXilin;