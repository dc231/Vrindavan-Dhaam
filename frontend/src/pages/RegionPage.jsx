import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPlacesByRegion } from '../api';
import PlaceCard from '../components/PlaceCard';
import styles from './RegionPage.module.css';

const RegionPage = () => {
  const { regionName } = useParams(); 
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);
      try {
        const { data } = await getPlacesByRegion(regionName);
        setPlaces(data);
      } catch (error) {
        console.error(`Failed to fetch places for ${regionName}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [regionName]); 

  if (loading) {
    return <h2>Loading places in {regionName}...</h2>;
  }

  return (
    <div>
      <h1 className={styles.title}>Places in {regionName}</h1>
      <div className={styles.grid}>
        {places.length > 0 ? (
          places.map((place) => (
            <PlaceCard key={place._id} place={place} />
          ))
        ) : (
          <p>No places found for this region.</p>
        )}
      </div>
    </div>
  );
};

export default RegionPage;