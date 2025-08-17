import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AdminSidebar.module.css';

const AdminSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? styles.active : styles.link}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/userlist" className={({ isActive }) => isActive ? styles.active : styles.link}>
          Users
        </NavLink>
        {/* We'll add more links here later */}
      </nav>
    </aside>
  );
};

export default AdminSidebar;