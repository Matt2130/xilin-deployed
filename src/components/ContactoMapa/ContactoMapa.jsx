import React from "react";
import styles from "./ContactoMapa.module.css"

function ContactoMapa() {
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1099.1009581863225!2d-100.88093647564145!3d22.09086345727032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa39d684e54fb%3A0x51d2c2fa11c6045c!2sXILIN%20Montacargas%20El%C3%A9ctricos.!5e0!3m2!1ses!2smx!4v1760494347282!5m2!1ses!2smx"
                width="100%"
                height="750"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <article className={styles.article}>
                <div className={styles.preguntas}>
                    <h2 className={styles.titleh2}>¿TIENES PREGUNTAS?</h2>
                    <p className={styles.texto}>Escríbenos y te ayudaremos a resolver cualquier duda.</p>
                    <h3 className={styles.h3estilo}>Teléfono</h3>
                    <p className={styles.texto}>+52 444 411 7481</p>
                    <h3 className={styles.h3estilo}>Correo</h3>
                    <p className={styles.texto}>ventasxilin@xilinslp.com.mx</p>
                </div>
            </article>
        </>
    )
}

export default ContactoMapa;