import React from "react";
import ContactForm from "../components/ContacForm/ContactForm";
import ContactoMapa from "../components/ContactoMapa/ContactoMapa";
import styles from "../components/ContactoMapa/ContactoMapa.module.css";

function ContactUS() {
    return (
        <>
        <main>
            <h1 className={styles.h1contacto}>CONTACTO</h1>
            <ContactoMapa />
            <ContactForm />
        </main>
        </>
    )
}

export default ContactUS;