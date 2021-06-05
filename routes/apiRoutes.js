const Workout = require("../models/Workout");
const db = require("../models")

module.exports = function(app) {
  app.post("/api/workouts", (req , res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //one get route needs to return range /api/workouts/range
  //other get /api/workouts
  // aggregate - look at intructions
  app.get("/api/workouts/:id", (req, res) => {
    console.log(req.params.id)
    Workout.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // create delete routes

};



