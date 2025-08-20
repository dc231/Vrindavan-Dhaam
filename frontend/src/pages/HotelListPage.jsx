import React, { useState, useEffect } from 'react';
import { getHotels } from '../api';
import toast from 'react-hot-toast';
import styles from './HotelListPage.module.css';

const HotelListPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const { data } = await getHotels();
        setHotels(data);
      } catch (error) {
        toast.error('Could not fetch hotels.');
      }
    };
    fetchHotels();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find Your Stay</h1>
      <div className={styles.grid}>
        {hotels.map((hotel) => (
          <div key={hotel._id} className={styles.card}>
            <img src={hotel.photos[0] || 'https://placehold.co/600x400/f0f0f0/ccc?text=Hotel'} alt={hotel.name} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <h2>{hotel.name}</h2>
                <span className={styles.rating}>⭐ {hotel.rating.toFixed(1)}</span>
              </div>
              <p className={styles.location}>{hotel.location}</p>
              <p className={styles.amenities}>{hotel.amenities.join(' • ')}</p>
              <div className={styles.cardFooter}>
                <p className={styles.price}>₹{hotel.pricePerNight}<span>/night</span></p>
                <button className={styles.bookButton}>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelListPage;