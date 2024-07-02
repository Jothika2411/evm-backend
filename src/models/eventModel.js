import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  event: {
    type: String,
    trim: true,
  },
  venue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Venue",
  },
  date: {
    type: Date,
    trim: true,
  },
  time: {
    from: { type: String },
    to: { type: String },
  },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
