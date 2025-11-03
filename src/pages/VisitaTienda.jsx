import React from "react";
import ContactForm from "../components/ContacForm/ContactForm";
import ContactoMapa from "../components/ContactoMapa/ContactoMapa";
import VisitUS from "../components/VisitaTienda/VisitUS";

function VisitaTienda() {
    return (
        <>
            <main>
                <title>Xilin Visitanos | Venta y Renta de Montacargas Eléctricos</title>
                <meta name="description" content="Como llegar a Xilin y descubrir todo lo que tenemos para ti" />
                <meta property="og:title" content="Xilin Montacargas | Venta y Renta" />
                <VisitUS />
                <ContactoMapa />
                <ContactForm />
            </main>
        </>
    )
}

export default VisitaTienda;