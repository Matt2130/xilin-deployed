import React from "react";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.h1NotFound}>
          <span>ERROR 404</span>
          La URL Que Ingresaste No Existe, Verifícala
        </h1>
        <a className={styles.anchor} href="/" alt="Botón para volver a Inicio | Xilin">
          Volver a Inicio
        </a>
      </main>
    </>
  );
}

export default PageNotFound;