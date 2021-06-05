var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  day: { type: String, required: true },
  exercises: [
      {
        type: String,
        name: String,
        weight: Number,
        sets: Number,
        reps: Number,
        duration: Number,
        distance: Number,
      }
    ]
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;