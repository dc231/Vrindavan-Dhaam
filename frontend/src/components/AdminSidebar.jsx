import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AdminSidebar.module.css";

const AdminSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/userlist"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Users
        </NavLink>
        <NavLink
          to="/admin/vehicles"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Vehicles
        </NavLink>
        <NavLink to="/admin/hotels" className={({ isActive }) => isActive ? styles.active : styles.link}>
          Hotels
        </NavLink>
        <NavLink to="/admin/packages/create" className={({ isActive }) => isActive ? styles.active : styles.link}>
          Packages
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
