import Place from '../models/placeModel.js';

const getPlaces = async (req, res) => {
    try {
        const filter = req.query.region ? { region: req.query.region } : {};
        const places = await Place.find(filter);
        res.json(places);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getPlaceById = async (req, res) => {
    try {
        const place = await Place.findById(req.params.id);

        if (place) {
            res.json(place);
        } else {
            res.status(404).json({ message: 'Place not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createPlace = async (req, res) => { 
  try {
    const { name, description, region, category, coordinates, imageUrl, timings, entryFee } = req.body;

    const place = new Place({
      name,
      description,
      region,
      category,
      coordinates,
      imageUrl,
      timings,
      entryFee,
    });

    const createdPlace = await place.save();
    res.status(201).json(createdPlace);
  } catch (error) {
    res.status(400).json({ message: 'Invalid place data', error: error.message });
  }
};

export { getPlaces, getPlaceById, createPlace }; 