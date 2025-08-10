import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
    res.json({ message: "Welcome to the Mathura Darshan API!" });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});