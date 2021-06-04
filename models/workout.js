var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  day: { type: String, required: true },
  exercises: [
      {
        type: Schema.Types.ObjectId,
        ref: "exercise"
      }
    ]
});

var Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;