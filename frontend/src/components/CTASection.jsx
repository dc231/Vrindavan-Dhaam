import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './CTASection.module.css';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready for Your Divine Journey?</h2>
          <p>Join thousands of devotees who have experienced the spiritual magic of Braj Bhumi</p>
          <div className={styles.ctaButtons}>
            <Link to="/packages" className="btn btn-primary btn-lg">
              Plan Your Trip
              <ArrowRight size={22} style={{ marginLeft: '8px' }} />
            </Link>
            <a href="#footer" className="btn btn-outline btn-lg">Contact Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;