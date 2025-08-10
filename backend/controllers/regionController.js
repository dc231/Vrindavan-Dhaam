import Region from '../models/regionModel.js';

// @desc    Get all regions
// @route   GET /api/regions
// @access  Public
const getRegions = async (_req, res) => {
  try {
    const regions = await Region.find({});
    res.json(regions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a new region
// @route   POST /api/regions
// @access  Private 
const createRegion = async (req, res) => {
  try {
    const { name, description, coverImageUrl } = req.body;

    const region = new Region({
      name,
      description,
      coverImageUrl,
    });

    const createdRegion = await region.save();
    res.status(201).json(createdRegion);
  } catch (error) {
    res.status(400).json({ message: 'Invalid region data' });
  }
};

export { getRegions, createRegion };