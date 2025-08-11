import React from 'react';
import { Link } from 'react-router-dom';         
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.title}>
        Braj Darshan
      </Link>
      <ul className={styles.links}>
        <li><Link to="/region/Mathura">Mathura</Link></li>
        <li><Link to="/region/Vrindavan">Vrindavan</Link></li>
        <li><Link to="/region/Goverdhan">Goverdhan</Link></li>
        <li><Link to="/region/Barsana">Barsana</Link></li> 
        <li><Link to="/region/Nandgaon">Nandgaon</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;