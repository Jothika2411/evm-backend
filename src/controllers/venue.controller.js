import Venue from "../models/venueModel.js";

const errorMessages = {
  NOT_FOUND: "Event not found",
  ID_REQUIRED: "ID is required",
};

const createVenue = async (req, res) => {
  try {
    const venueData = req.body;
    const newVenue = await Venue.create(venueData);
    res.status(201).json(newVenue);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAllVenues = async (req, res) => {
  try {
    const events = await Venue.find({});
    res.status(200).json({ events });
  } catch (error) {
    console.error("Error in getting Venue", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllVenueById = async (req, res) => {
  try {
    const venue = await Venue.findById(req.params.id);
    if (!venue) {
      return res.status(404).json(errorMessages.NOT_FOUND);
    }
    res.status(200).json(venue);
  } catch (error) {
    console.error("Error in getting venue", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateVenue = async (req, res) => {
  try {
    const updatedVenue = await Venue.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedVenue)
      return res.status(404).json(errorMessages.NOT_FOUND);
    res.status(200).json(updatedVenue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByIdAndDelete(req.params.id);
    if (!venue) return res.status(404).json(errorMessages.NOT_FOUND);
    res.status(200).json({ message: "Venue deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const VenueController = {
  getAllVenues,
  createVenue,
  getAllVenueById,
  updateVenue,
  deleteVenue,
};
