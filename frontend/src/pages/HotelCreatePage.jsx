import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createHotel } from '../api';
import toast from 'react-hot-toast';
import styles from './AdminForm.module.css';

const HotelCreatePage = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(4);
  const [pricePerNight, setPricePerNight] = useState('');
  const [photos, setPhotos] = useState('');
  const [amenities, setAmenities] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const hotelData = {
      name,
      location,
      rating: Number(rating),
      pricePerNight: Number(pricePerNight),
      photos: photos.split(',').map(item => item.trim()),
      amenities: amenities.split(',').map(item => item.trim()),
    };

    try {
      await createHotel(hotelData);
      toast.success('Hotel added successfully!');
      navigate('/admin/hotels'); 
    } catch (error) {
      toast.error('Failed to add hotel.');
      console.error(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Add New Hotel</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.formGroup}>
          <label>Hotel Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Location</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Rating (1-5)</label>
          <input type="number" value={rating} min="1" max="5" step="0.1" onChange={(e) => setRating(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Price per Night (₹)</label>
          <input type="number" value={pricePerNight} onChange={(e) => setPricePerNight(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Photos (Comma-separated URLs)</label>
          <input type="text" value={photos} onChange={(e) => setPhotos(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Amenities (Comma-separated)</label>
          <input type="text" value={amenities} onChange={(e) => setAmenities(e.target.value)} required />
        </div>
        <button type="submit" className={styles.submitButton}>Add Hotel</button>
      </form>
    </div>
  );
};

export default HotelCreatePage;