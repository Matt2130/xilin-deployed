import React from "react";
import BeneficiosIndex from "../components/BeneficiosIndex/BeneficiosIndex";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import ContactForm from "../components/ContacForm/ContactForm";
import RentaSeccion from "../components/RentaSeccion/RentaSeccion";

function RentaXilin() {
    return (
        <>
            <main>
                <title>Xilin Renta | Venta y Renta de Montacargas Eléctricos</title>
                <meta name="description" content="Todos los productos que Xilin tiene para venta" />
                <meta property="og:title" content="Xilin Montacargas | Venta y Renta" />
                <RentaSeccion />
                <FeaturesSection />
                <BeneficiosIndex />
                <ContactForm />
            </main>
        </>
    )
}

export default RentaXilin;