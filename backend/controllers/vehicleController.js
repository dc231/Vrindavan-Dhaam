import Vehicle from '../models/vehicleModel.js';

const createVehicle = async (req, res) => {
  try {
    const { type, name, imageUrl, pricePerKm, driver } = req.body;
    const vehicle = new Vehicle({
      type,
      name,
      imageUrl,
      pricePerKm,
      driver,
    });
    const createdVehicle = await vehicle.save();
    res.status(201).json(createdVehicle);
  } catch (error) {
    res.status(400).json({ message: 'Invalid vehicle data', error: error.message });
  }
};

const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({});
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export { createVehicle, getVehicles };