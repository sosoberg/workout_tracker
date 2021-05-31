var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  duration: { type: Number, required: true }
});

var Exercise = mongoose.model("exercise", exerciseSchema);

module.exports = Exercise;