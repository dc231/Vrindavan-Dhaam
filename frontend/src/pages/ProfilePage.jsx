import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserProfile, updateUserProfile } from '../api';
import toast from 'react-hot-toast';
import styles from './AuthForm.module.css'; 

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setAuthUser } = useAuth();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await getUserProfile();
        setName(data.name);
        setEmail(data.email);
      } catch (error) {
        console.error('Failed to fetch profile', error);
        toast.error('Could not load profile.');
      }
    };
    fetchUserProfile();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const { data } = await updateUserProfile({ name, email, password });
        setAuthUser(data);
        toast.success('Profile Updated Successfully!');
        setPassword('');
        setConfirmPassword('');
      } catch (error) {
        toast.error('Failed to update profile.');
      }
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={submitHandler}>
        <h1>User Profile</h1>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label>New Password</label>
          <input type="password" placeholder="Leave blank to keep the same" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Confirm New Password</label>
          <input type="password" placeholder="Leave blank to keep the same" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit" className={styles.submitButton}>Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;