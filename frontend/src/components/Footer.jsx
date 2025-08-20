import React from 'react';
import { Phone, Mail, Map } from 'lucide-react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Braj Darshan</h3>
            <p>Your gateway to the divine land of Lord Krishna. Experience spirituality, culture, and devotion in the sacred Braj Bhumi.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><Link to="/">Destinations</Link></li>
              <li><Link to="/packages">Packages</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <div className={styles.contactItem}>
              <Phone size={16} />
              <span>+91 95486 22241</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} />
              <span>dheerajchaudhary231@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <Map size={16} />
              <span>Mathura, Uttar Pradesh, India</span>
            </div>
          </div>
          {/* <div className={styles.footerSection}>
            <h4>Newsletter</h4>
            <p>Subscribe for updates on our latest packages.</p>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div> */}
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Braj Darshan. All rights reserved.| Made with ❤️ by Dheeraj Chaudhary</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;