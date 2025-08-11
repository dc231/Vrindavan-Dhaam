import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PlaceCard.module.css';

const PlaceCard = ({ place }) => {
  return (
    <Link to={`/place/${place._id}`} className={styles.card}>
      <div className={styles.imageContainer}>
  <img src={place.imageUrl} alt={place.name} className={styles.cardImage} />
</div>
<div className={styles.contentContainer}>
  <h3 className={styles.cardTitle}>{place.name}</h3>
</div>
    </Link>
  );
};

export default PlaceCard;