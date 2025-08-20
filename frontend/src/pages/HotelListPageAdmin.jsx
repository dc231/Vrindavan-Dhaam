import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHotels } from '../api';
import toast from 'react-hot-toast';
import styles from './AdminListPage.module.css'; 

const HotelListPageAdmin = () => {
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
      <div className={styles.header}>
        <h1>Hotels</h1>
        <Link to="/admin/hotels/create" className={styles.addButton}>
          + Add Hotel
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>LOCATION</th>
            <th>PRICE/NIGHT</th>
            <th>RATING</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel._id}>
              <td>{hotel.name}</td>
              <td>{hotel.location}</td>
              <td>₹{hotel.pricePerNight}</td>
              <td>{hotel.rating} ⭐</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HotelListPageAdmin;