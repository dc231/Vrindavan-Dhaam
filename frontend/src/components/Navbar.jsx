import React from 'react';
import { Link } from 'react-router-dom';         
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logoutUser } from '../api';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutUser();
      setAuthUser(null);
      toast.success('Logout Successful!');
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout:', error);
      toast.error('Logout failed. Please try again.');
    }
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
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
      </div>
      <div className={styles.navRight}>
        {authUser ? (
        <>
          <Link to="/profile" className={styles.userName}>Hello, {authUser.name}</Link>
          <button onClick={logoutHandler} className={styles.logoutButton}>Logout</button>
        </>
        ) : (
        <>
          <Link to="/login" className={styles.loginButton}>Login</Link>
          <Link to="/register" className={styles.registerButton}>Sign Up</Link>
        </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;