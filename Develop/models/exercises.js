const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for your exercise"
  },
  type: {
    type: String,
    trim: true,
    required: "Enter your type of exercise"
  },
  weight: {
    type: String,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  durration: {
    type: String,
    required: "Enter exercise durration"
  },
  distanceTraveled: {
    type: String,
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;