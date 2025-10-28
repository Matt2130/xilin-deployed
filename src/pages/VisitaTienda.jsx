import React from "react";
import ContactForm from "../components/ContacForm/ContactForm";
import ContactoMapa from "../components/ContactoMapa/ContactoMapa";
import VisitUS from "../components/VisitaTienda/VisitUS";

function VisitaTienda() {
    return (
        <>
            <main>
                <VisitUS />
                <ContactoMapa />
                <ContactForm />
            </main>
        </>
    )
}

export default VisitaTienda;