import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import regionRoutes from './routes/regionRoutes.js';
import placeRoutes from './routes/placeRoutes.js'; 
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import vehicleRoutes from './routes/vehicleRoutes.js';
import hotelRoutes from './routes/hotelRoutes.js';
import tourPackageRoutes from './routes/tourPackageRoutes.js';

dotenv.config();
connectDB();
const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  process.env.FRONTEND_URL 
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.get('/', (_req, res) => {
    res.json({ message: "Welcome to the Mathura Darshan API!" });
});

app.use('/api/regions', regionRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/packages', tourPackageRoutes);
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});