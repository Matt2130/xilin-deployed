import React from "react";
import BlogPage from "../components/BlogComponent/BlogPage";

function Blogs() {
    return (
        <>
            <title>Xilin Blogs | Venta y Renta de Montacargas Eléctricos</title>
            <meta name="description" content="Blog de nuestros productos para conocer mas acerca de lo que vendemos" />
            <meta property="og:title" content="Xilin Montacargas | Venta y Renta" />
            <main>
                <BlogPage />
            </main>
        </>
    )
}

export default Blogs;