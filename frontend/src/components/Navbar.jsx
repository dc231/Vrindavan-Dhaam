import React, { useState } from 'react';
import { Link } from 'react-router-dom';         
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logoutUser } from '../api';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const logoutHandler = async () => {
    setMenuOpen(false);
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
        <Link to="/" className={styles.title}>Braj Darshan</Link>
        <ul className={styles.mainLinks}>
          <li><Link to="/region/Mathura">Mathura</Link></li>
          <li><Link to="/region/Vrindavan">Vrindavan</Link></li>
          <li><Link to="/region/Goverdhan">Goverdhan</Link></li>
          <li><Link to="/region/Barsana">Barsana</Link></li>
          <li><Link to="/region/Nandgaon">Nandgaon</Link></li>
        </ul>
      </div>
      
        <div className={styles.navRight}>
          <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
        </div>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
          <div className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
            &times;
          </div>
          {/* Region links for mobile view */}
          <ul className={styles.mobileRegionLinks}>
             <li><Link to="/region/Mathura" onClick={handleLinkClick}>Mathura</Link></li>
             <li><Link to="/region/Vrindavan" onClick={handleLinkClick}>Vrindavan</Link></li>
             <li><Link to="/region/Goverdhan" onClick={handleLinkClick}>Goverdhan</Link></li>
             <li><Link to="/region/Barsana" onClick={handleLinkClick}>Barsana</Link></li>
             <li><Link to="/region/Nandgaon" onClick={handleLinkClick}>Nandgaon</Link></li>
          </ul>
          <hr />
          {authUser ? (
          <>
            <Link to="/profile" className={styles.navButton} onClick={handleLinkClick}>My Profile</Link>
            <Link to="/vehicles" className={styles.navButton} onClick={handleLinkClick}>Book a Vehicle</Link>
            {authUser.isAdmin && (
              <Link to="/admin/userlist" onClick={handleLinkClick}>Admin</Link>
            )}
            <hr />
            <button onClick={logoutHandler} className={styles.logoutButton}>Logout</button>
          </>
          ) : (
          <>
            <Link to="/login" className={styles.loginButton} onClick={handleLinkClick}>Login</Link>
            <Link to="/register" className={styles.registerButton} onClick={handleLinkClick}>Sign Up</Link>
          </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;