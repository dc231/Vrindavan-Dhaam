import mongoose from 'mongoose';

const tourPackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String, // e.g., "2 Days / 1 Night"
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  
  includedVehicle: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Vehicle',
  },
  includedHotel: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Hotel',
  },
}, {
  timestamps: true,
});

const TourPackage = mongoose.model('TourPackage', tourPackageSchema);
export default TourPackage;