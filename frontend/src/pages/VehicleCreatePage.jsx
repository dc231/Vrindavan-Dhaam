import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createVehicle } from '../api';
import toast from 'react-hot-toast';
import styles from './AdminForm.module.css';

const VehicleCreatePage = () => {
  const [type, setType] = useState('Car');
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [pricePerKm, setPricePerKm] = useState('');
  const [driverName, setDriverName] = useState('');
  const [driverContact, setDriverContact] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const vehicleData = {
      type,
      name,
      imageUrl,
      pricePerKm,
      driver: { name: driverName, contact: driverContact },
    };

    try {
      await createVehicle(vehicleData);
      toast.success('Vehicle added successfully!');
      navigate('/admin/vehicles'); 
    }catch (error) { 
    toast.error('Failed to add vehicle.');
    console.error(error);
  }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Add New Vehicle</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.formGroup}>
          <label>Vehicle Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Car">Car</option>
            <option value="Bus">Bus</option>
            <option value="Bike">Bike</option>
            <option value="E-Rickshaw">E-Rickshaw</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Name (e.g., "Toyota Innova")</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Image URL</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Price per Km ($)</label>
          <input type="number" value={pricePerKm} onChange={(e) => setPricePerKm(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Driver's Name</label>
          <input type="text" value={driverName} onChange={(e) => setDriverName(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Driver's Contact</label>
          <input type="text" value={driverContact} onChange={(e) => setDriverContact(e.target.value)} required />
        </div>
        <button type="submit" className={styles.submitButton}>Add Vehicle</button>
      </form>
    </div>
  );
};

export default VehicleCreatePage;