const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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
  duration: {
    type: Number,
    required: "Enter exercise durration"
  },
  weight: {
    type: Number,
    optional: true

  },
  sets: {
    type: Number,
    optional: true
  },
  reps: {
    type: Number,
    optional: true
  },
  distanceTraveled: {
    type: Number,
    optional: true
  },
});

const workout = mongoose.model("Workout", WorkoutSchema);

module.exports = workout;