import React, { useState, useEffect } from 'react';
import { getVehicles } from '../api';
import toast from 'react-hot-toast';
import styles from './VehicleListPageUser.module.css';

const VehicleListPageUser = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const { data } = await getVehicles();
        setVehicles(data);
      } catch (error) {
        toast.error('Could not fetch vehicles.');
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Book a Vehicle</h1>
      <div className={styles.grid}>
        {vehicles.map((vehicle) => (
          <div key={vehicle._id} className={styles.card}>
            <img src={vehicle.imageUrl} alt={vehicle.name} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2>{vehicle.name}</h2>
              <p className={styles.type}>{vehicle.type}</p>
              <p className={styles.price}>₹{vehicle.pricePerKm}/km</p>
              <div className={styles.driverInfo}>
                <p>Driver: {vehicle.driver.name}</p>
                <p>Contact: {vehicle.driver.contact}</p>
              </div>
              <button className={styles.bookButton}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleListPageUser;