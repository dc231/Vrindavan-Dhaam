import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',
  withCredentials: true
});

export const getRegions = () => API.get('/regions');
export const getPlacesByRegion = (regionName) => API.get(`/places?region=${regionName}`);
export const getPlaceById = (id) => API.get(`/places/${id}`);

export const loginUser = (formData) => API.post('/users/login', formData);
export const registerUser = (formData) => API.post('/users/register', formData);
export const logoutUser = () => API.post('/users/logout');

export const getUserProfile = () => API.get('/users/profile');
export const updateUserProfile = (userData) => API.put('/users/profile', userData);

export const getAllUsers = () => API.get('/users');
export const createVehicle = (vehicleData) => API.post('/vehicles', vehicleData);
export const getVehicles = () => API.get('/vehicles');
export const getHotels = () => API.get('/hotels');
export const createHotel = (hotelData) => API.post('/hotels', hotelData);
export const createTourPackage = (packageData) => API.post('/packages', packageData);
export const getTourPackages = () => API.get('/packages');