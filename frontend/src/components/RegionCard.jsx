import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RegionCard.module.css';

const RegionCard = ({ region }) => {
  return (
    <Link to={`/region/${region.name}`} className={styles.card}>
      <img src={region.coverImageUrl} alt={region.name} className={styles.cardImage} />
      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>{region.name}</h3>
      </div>
    </Link>
  );
};

export default RegionCard;