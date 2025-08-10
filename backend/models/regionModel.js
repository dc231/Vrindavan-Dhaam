import mongoose from 'mongoose';

const regionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    enum: ['Mathura', 'Vrindavan', 'Barsana', 'Goverdhan', 'Nandgaon'],
  },
  description: {
    type: String,
    required: true,
  },
  coverImageUrl: {
    type: String,
    required: true,
  },
});

const Region = mongoose.model('Region', regionSchema);

export default Region;