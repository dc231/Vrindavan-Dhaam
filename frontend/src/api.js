import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/api',
});

export const getRegions = () => API.get('/regions');
export const getPlacesByRegion = (regionName) => API.get(`/places?region=${regionName}`);
export const getPlaceById = (id) => API.get(`/places/${id}`);