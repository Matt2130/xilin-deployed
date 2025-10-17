import React from 'react';
import styles from './Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className={styles.pagination}>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        &laquo;
      </button>
      <span>Página {currentPage} de {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        &raquo;
      </button>
    </nav>
  );
}

export default Pagination;