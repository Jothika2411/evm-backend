import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  event: {
    type: String,
    required: true,
    trim: true,
  },
  venue: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
    unique: true,
    trim: true,
  },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
