import React, { useState, useEffect } from 'react';
import { getTourPackages } from '../api';
import toast from 'react-hot-toast';
import styles from './PackageListPage.module.css';

const PackageListPage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const { data } = await getTourPackages();
        setPackages(data);
      } catch (error) {
        toast.error('Could not fetch tour packages.');
      }
    };
    fetchPackages();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tour Packages</h1>
      <div className={styles.grid}>
        {packages.map((pkg) => (
          <div key={pkg._id} className={styles.card}>
            <img src={pkg.imageUrl} alt={pkg.name} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2>{pkg.name}</h2>
              <p className={styles.duration}>{pkg.duration}</p>
              <p className={styles.description}>{pkg.description}</p>
              <ul className={styles.includes}>
                <li>🏨 {pkg.includedHotel.name}</li>
                <li>🚗 {pkg.includedVehicle.name}</li>
              </ul>
              <div className={styles.cardFooter}>
                <p className={styles.price}>₹{pkg.price}<span>/person</span></p>
                <button className={styles.bookButton}>View Package</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageListPage;