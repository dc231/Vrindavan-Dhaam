import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { getPlaceById } from '../api';
import styles from './PlaceDetailsPage.module.css';

const PlaceDetailsPage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const { data } = await getPlaceById(id);
        setPlace(data);
      } catch (error) {
        console.error(`Failed to fetch place:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlace();
  }, [id]);

  if (loading) return <h2>Loading Details...</h2>;
  if (!place) return <h2>Place not found.</h2>;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${place.name}, ${place.location}`;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.gridContainer}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={place.imageUrl} alt={place.name} />
        </motion.div>

        <motion.div 
          className={styles.detailsContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.title}>{place.name}</h1>
          <p className={styles.description}>{place.description}</p>

          <div className={styles.infoSection}>
            <h3>Timings</h3>
            <p>{place.timings}</p>
          </div>

          <div className={styles.infoSection}>
            <h3>Entry Fee</h3>
            <p>{place.entryFee}</p>
          </div>

          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.directionsButton}>
            Get Directions
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PlaceDetailsPage;