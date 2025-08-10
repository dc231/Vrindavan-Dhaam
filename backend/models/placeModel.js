import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    
    region: {
      type: String,
      required: true,
      enum: ['Mathura', 'Vrindavan', 'Barsana', 'Goverdhan', 'Nandgaon'],
    },
    imageUrl: {
      type: String,
      required: true,
    },
    
    coordinates: {
      type: { type: String, enum: ['Point'], required: true },
      coordinates: { type: [Number], required: true }, 
    },
    timings: { type: String, default: 'N/A' },
    entryFee: { type: String, default: 'Free' },
  },
  { timestamps: true }
);

placeSchema.index({ coordinates: '2dsphere' });

const Place = mongoose.model('Place', placeSchema);

export default Place;