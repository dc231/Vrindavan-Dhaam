import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getVehicles } from '../api';
import toast from 'react-hot-toast';
import styles from './UserListPage.module.css'; 

const VehicleListPage = () => {
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
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Vehicles</h1>
        <Link to="/admin/vehicles/create" style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#f57c00',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}>
          + Add Vehicle
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>TYPE</th>
            <th>PRICE/KM</th>
            <th>DRIVER</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle._id}>
              <td>{vehicle.name}</td>
              <td>{vehicle.type}</td>
              <td>${vehicle.pricePerKm}</td>
              <td>{vehicle.driver.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleListPage;