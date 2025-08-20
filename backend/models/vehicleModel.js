import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Car', 'Bus', 'Bike', 'E-Rickshaw'],
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  pricePerKm: {
    type: Number,
    required: true,
  },
  driver: {
    name: { type: String, required: true },
    contact: { type: String, required: true },
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true,
  },
}, {
  timestamps: true,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;