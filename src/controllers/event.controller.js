import Event from "../models/eventModel.js";

const errorMessages = {
  NOT_FOUND: "Event not found",
  ID_REQUIRED: "ID is required",
};

const createEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const newEvent = await Event.create(eventData);
    res.status(200).json({newEvent});
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).populate("venue");
    res.status(200).json({ events });
  } catch (error) {
    console.error("Error in getting events", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllEventsById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json(errorMessages.NOT_FOUND);
    }
    res.status(200).json(event);
  } catch (error) {
    console.error("Error in getting event", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEvent) return res.status(404).json(errorMessages.NOT_FOUND);
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json(errorMessages.NOT_FOUND);
    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const EventController = {
  createEvent,
  getAllEvents,
  getAllEventsById,
  updateEvent,
  deleteEvent,
};
