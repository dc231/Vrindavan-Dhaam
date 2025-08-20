import Hotel from '../models/hotelModel.js';

const createHotel = async (req, res) => {
  try {
    const { name, location, rating, pricePerNight, photos, amenities } = req.body;
    const hotel = new Hotel({
      name,
      location,
      rating,
      pricePerNight,
      photos,
      amenities,
    });
    const createdHotel = await hotel.save();
    res.status(201).json(createdHotel);
  } catch (error) {
    res.status(400).json({ message: 'Invalid hotel data', error: error.message });
  }
};


const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({});
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export { createHotel, getHotels };