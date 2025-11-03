import React from "react";
import ContactForm from "../components/ContacForm/ContactForm";
import ContactoMapa from "../components/ContactoMapa/ContactoMapa";
import styles from "../components/ContactoMapa/ContactoMapa.module.css";

function ContactUS() {
    return (
        <>
        <main>
            <title>Xilin Contacto | Venta y Renta de Montacargas Eléctricos</title>
            <meta name="description" content="Aquí podras contactar nuestros servicios" />
            <meta property="og:title" content="Xilin Montacargas | Venta y Renta" />
            <h1 className={styles.h1contacto}>CONTACTO</h1>
            <ContactoMapa />
            <ContactForm />
        </main>
        </>
    )
}

export default ContactUS;