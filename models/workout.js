var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  day: { type: String, required: true },
  exercises: [
      {
        type: Schema.Types.ObjectId,
        ref: "Exercise"
      }
    ]
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;