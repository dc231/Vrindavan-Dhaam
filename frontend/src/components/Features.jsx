import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Star } from 'lucide-react';
import styles from './Features.module.css';

const featuresData = [
  {
    icon: <MapPin size={32} />,
    title: 'Sacred Destinations',
    description: 'Explore the holiest places in Braj Bhumi with our curated tours.'
  },
  {
    icon: <Calendar size={32} />,
    title: 'Best Time to Visit',
    description: 'Get insights on the perfect seasons and festivals to experience Braj.'
  },
  {
    icon: <Users size={32} />,
    title: 'Expert Guides',
    description: 'Learn from knowledgeable local guides about history and spirituality.'
  },
  {
    icon: <Star size={32} />,
    title: 'Authentic Experience',
    description: 'Immerse yourself in the true essence of Braj culture and traditions.'
  }
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Why Choose Braj Darshan?</h2>
          <p>Experience the divine journey with our exceptional services</p>
        </motion.div>
        <div className={styles.featuresGrid}>
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;