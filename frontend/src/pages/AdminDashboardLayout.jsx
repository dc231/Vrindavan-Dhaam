import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import styles from './AdminDashboardLayout.module.css';

const AdminDashboardLayout = () => {
  return (
    <div className={styles.dashboard}>
      <AdminSidebar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboardLayout;