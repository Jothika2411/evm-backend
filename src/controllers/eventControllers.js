import Event from "../models/eventModel";

const errorMessages = {
  NOT_FOUND: "Event not found",
  ID_REQUIRED: "ID is required",
};

const createEvent = async (req, res) => {
  try {
    if (!payload.event || !payload.venue || !payload.date) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const event = Event.create(payload);
    return res.status(200).json({ event });
  } catch (error) {
    console.error("Error in creating events", error);
  }
};

const getAllEvents = async (res, req) => {
  try {
    const events = Event.find({});
    res.status(200).json({ events });
  } catch (error) {
    console.error("Error in getting events", error);
  }
};

const getAllEventsById = async (res, req) => {
  try {
    let id = getIDFromParams(req);
    let event = await Event.findById({ _id: id });
    if (!event) {
      throw new Error(errorMessages.NOT_FOUND);
    }
    return res.status(200).json({ event });
  } catch (error) {
    console.error("Error in getting events", error);
  }
};

const updateEvent = async (req, res) => {
  try {
    const id = getIDFromParams(req);
    if (!id) {
      throw new Error(errorMessages.ID_REQUIRED);
    }
 
  } catch (error) {}
};
