import React from 'react';
import styles from './Review.module.css';

const Review = ({ fotoUrl, nome, avaliacao, comentario }) => {
  const estrelas = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`${styles.star} ${index < avaliacao ? styles.filled : ''}`}>★</span>
  ));

  return (
    <div className={styles.review} style={{ backgroundImage: `url(${fotoUrl})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h3>{nome}</h3>
        <div className={styles.stars}>
          {estrelas}
        </div>
        <p className={styles.content}>{comentario}</p>
      </div>
    </div>
  );
};

export default Review;
