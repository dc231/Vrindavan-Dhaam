import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import styles from './HeroSection.module.css';

const heroImages = [
  'https://res.cloudinary.com/dco2rlraf/image/upload/v1754896686/Shri-Krishna-Janmabhoomi-temple_y4rnzn.jpg',
  'https://res.cloudinary.com/dco2rlraf/image/upload/v1754909278/prem-mandir_s2grgw.jpg',
  'https://res.cloudinary.com/dco2rlraf/image/upload/v1754912008/Kusum_Sarovar_igaour.jpg'
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const destinationSection = document.getElementById('destinations');
    if (destinationSection) {
      destinationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.heroImage} ${index === currentImageIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className={styles.heroOverlay}>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>
              Welcome to <span className={styles.textGradient}>Braj Darshan</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Discover the divine land of Lord Krishna - where spirituality meets culture, 
              and every corner tells a story of love and devotion
            </p>
            <div className={styles.heroButtons}>
              <button className="btn btn-primary" onClick={handleScroll}>
                Explore Destinations
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </button>
              
            </div>
          </motion.div>
        </div>
      </div>
      <div className={styles.heroIndicators}>
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;