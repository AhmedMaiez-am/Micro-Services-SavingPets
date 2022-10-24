const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventModel = new Schema({
  title: { type: String },
  description: { type: String},
  date: { type: String, default: new Date().toISOString() },
  start: { type: String, default: new Date().toISOString() },
  end: { type: String, default: new Date().toISOString() },
  image: { type: String, default: "Event.png", required: false },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
 
});

module.exports = mongoose.model("Event",EventModel);
