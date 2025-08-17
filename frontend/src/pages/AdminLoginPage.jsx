import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../api';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import styles from './AuthForm.module.css';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuthUser } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });

      if (data && data.isAdmin) {
        setAuthUser(data);
        toast.success('Admin Login Successful!');
        navigate('/admin/userlist');
      } else {
        
        toast.error('Not authorized as an admin.');
      }
    } catch (error) {
      toast.error('Invalid credentials.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={submitHandler}>
        <h1>Admin Login</h1>
        <div className={styles.demoBox}>
            <strong>Admin Credentials:</strong><br />
            Email: youradmin@email.com<br />
            Password: youradminpassword
        </div>
        <div className={styles.formGroup}>
          <label>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className={styles.submitButton}>Login as Admin</button>
        <div className={styles.switchForm}>
          <Link to="/login">User Login</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminLoginPage;