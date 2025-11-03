import React from "react";
import MantenimientoSeccion from "../components/MantenimientoSeccion/MantenimientoSeccion";
import ContactForm from "../components/ContacForm/ContactForm";

function Mantenimiento() {
    return (
        <>
            <main>
                <title>Xilin Mantenimiento | Venta y Renta de Montacargas Eléctricos</title>
                <meta name="description" content="Aquí encontraras todos nuestros planes para tu futura maquinaria" />
                <meta property="og:title" content="Xilin Montacargas | Venta y Renta" />
                <MantenimientoSeccion />
                <ContactForm />
            </main>
        </>
    )
}

export default Mantenimiento;