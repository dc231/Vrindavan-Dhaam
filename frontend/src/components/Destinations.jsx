import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Users, ArrowRight } from 'lucide-react';
import { getRegions } from '../api';
import styles from './Destinations.module.css';

const Destinations = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      const { data } = await getRegions();
      setRegions(data);
    };
    fetchRegions();
  }, []);

  return (
    <section id="destinations" className={styles.destinations}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Sacred Destinations</h2>
          <p>Explore the holy places that make Braj Bhumi divine</p>
        </motion.div>
        <div className={styles.destinationsGrid}>
          {regions.map((region, index) => (
            <motion.div
              key={region._id}
              className={styles.destinationCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.destinationImage}>
                <img src={region.coverImageUrl} alt={region.name} />
              </div>
              <div className={styles.destinationContent}>
                <div className={styles.destinationHeader}>
                  <h3>{region.name}</h3>
                </div>
                <p className={styles.destinationDescription}>{region.description}</p>
                <div className={styles.destinationFooter}>
                  <Link to={`/region/${region.name}`} className="btn btn-primary btn-sm">
                    Learn More
                    <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;