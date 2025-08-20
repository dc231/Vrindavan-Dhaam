import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  photos: [String], // An array of image URLs
  amenities: [String], // An array of amenities like "Wi-Fi", "Pool", etc.
}, {
  timestamps: true,
});

const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel;