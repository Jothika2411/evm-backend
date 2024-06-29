import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  event: {
    type: String,
    trim: true,
  },
  venue: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    trim: true,
  },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
