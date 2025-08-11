import React, { useState, useEffect } from 'react';
import { getRegions } from '../api';
import RegionCard from '../components/RegionCard';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const { data } = await getRegions();
        setRegions(data);
      } catch (error) {
        console.error('Failed to fetch regions:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRegions();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1 className={styles.title}>Explore the Braj Region</h1>
      <div className={styles.grid}>
        {regions.map((region) => (
          <RegionCard key={region._id} region={region} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;