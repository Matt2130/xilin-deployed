import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

import logoDeLaEmpresa from '/assets/xilinlogo.svg';

function Layout() {
  return (
    <div className={styles.appContainer}>
      <Header logoUrl={logoDeLaEmpresa} />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;