import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Braj Darshan
      </a>
      <ul className={styles.links}>
        <li><a href="/region/Mathura">Mathura</a></li>
        <li><a href="/region/Vrindavan">Vrindavan</a></li>
        <li><a href="/region/Goverdhan">Goverdhan</a></li>
        <li><a href="/region/Barsana">Barsana</a></li> 
        <li><a href="/region/Nandgaon">Nandgaon</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;