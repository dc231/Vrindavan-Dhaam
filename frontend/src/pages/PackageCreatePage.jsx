import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTourPackage, getVehicles, getHotels } from '../api';
import toast from 'react-hot-toast';
import styles from './AdminForm.module.css';

const PackageCreatePage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [includedVehicle, setIncludedVehicle] = useState('');
  const [includedHotel, setIncludedHotel] = useState('');

  const [vehicles, setVehicles] = useState([]);
  const [hotels, setHotels] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehiclesAndHotels = async () => {
      try {
        const { data: vehiclesData } = await getVehicles();
        const { data: hotelsData } = await getHotels();
        setVehicles(vehiclesData);
        setHotels(hotelsData);
      } catch (error) {
        toast.error("Could not fetch vehicles or hotels.");
      }
    };
    fetchVehiclesAndHotels();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const packageData = { name, description, duration, price, imageUrl, includedVehicle, includedHotel };

    try {
      await createTourPackage(packageData);
      toast.success('Package added successfully!');
      navigate('/admin/packages'); 
    } catch (error) {
      toast.error('Failed to add package.');
      console.error(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Add New Tour Package</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.formGroup}>
          <label>Package Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Duration (e.g., "2 Days / 1 Night")</label>
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Price (₹)</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Image URL</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Select Vehicle</label>
          <select value={includedVehicle} onChange={(e) => setIncludedVehicle(e.target.value)} required>
            <option value="">-- Choose a Vehicle --</option>
            {vehicles.map(v => <option key={v._id} value={v._id}>{v.name} ({v.type})</option>)}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Select Hotel</label>
          <select value={includedHotel} onChange={(e) => setIncludedHotel(e.target.value)} required>
            <option value="">-- Choose a Hotel --</option>
            {hotels.map(h => <option key={h._id} value={h._id}>{h.name} ({h.location})</option>)}
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Add Package</button>
      </form>
    </div>
  );
};

export default PackageCreatePage;