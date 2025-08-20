import TourPackage from '../models/tourPackageModel.js';

const createTourPackage = async (req, res) => {
  try {
    const { name, description, duration, price, imageUrl, includedVehicle, includedHotel } = req.body;
    const tourPackage = new TourPackage({
      name,
      description,
      duration,
      price,
      imageUrl,
      includedVehicle,
      includedHotel,
    });
    const createdPackage = await tourPackage.save();
    res.status(201).json(createdPackage);
  } catch (error) {
    res.status(400).json({ message: 'Invalid package data', error: error.message });
  }
};


const getTourPackages = async (req, res) => {
  try {
    // .populate() will fetch the details of the linked vehicle and hotel
    const packages = await TourPackage.find({}).populate('includedVehicle').populate('includedHotel');
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export { createTourPackage, getTourPackages };