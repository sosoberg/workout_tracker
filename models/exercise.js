var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  weight: Number,
  sets: Number,
  reps: Number,
  duration: { type: Number, required: true },
  distance: Number,
});

var Exercise = mongoose.model("exercise", exerciseSchema);

module.exports = Exercise;