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

// saving Data to our MongoDb
//const data = {
//  activity: "Mobile Phone",
//  mode: "random",
//  gender: "Male",
//  age: "25-30",
//  location: "Karachi, pakistan",
//  disc: "User using mobile phone",
//  date: "06-15-2020",
//  lat: 23.4455555,
//  log: 64.3353533,
//};
//const newActivity = new Activity(data);
//newActivity.save((error) => {
//  if (error) {
//    console.log("oops, something went wrong");
//  } else {
//    console.log("data has been saved");
//  }
//});

module.exports = Activity;
