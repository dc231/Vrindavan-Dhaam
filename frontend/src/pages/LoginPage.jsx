import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import styles from './AuthForm.module.css'; 
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuthUser } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      setAuthUser(data);
      toast.success('Login Successful!');
      navigate('/');
    } catch (error) {
      console.error('Failed to login:', error);
      toast.error('Invalid email or password.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={submitHandler}>
        <h1>Sign In</h1>
        <div className={styles.formGroup}>
          <label>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className={styles.submitButton}>Sign In</button>
        <div className={styles.switchForm}>
          New Customer? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;