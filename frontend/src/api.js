import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/api',
});

export const getRegions = () => API.get('/regions');
export const getPlacesByRegion = (regionName) => API.get(`/places?region=${regionName}`);
export const getPlaceById = (id) => API.get(`/places/${id}`);

export const loginUser = (formData) => API.post('/users/login', formData);
export const registerUser = (formData) => API.post('/users/register', formData);
export const logoutUser = () => API.post('/users/logout');