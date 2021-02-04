const mongoose = require("mongoose");
//Schema
const Schema = mongoose.Schema;
const ActivityPostSchema = new Schema({
  activity: String,
  mode: String,
  gender: String,
  age: String,
  location: Array,
  disc: String,
  lat: Number,
  log: Number,
  date: {
    type: Date,
    default: Date.now(),
  },
  state: {
    type: String,
    uppercase: true,
  },
});
//model
const Activity = mongoose.model("DAS_COLL", ActivityPostSchema);

module.exports = Activity;
