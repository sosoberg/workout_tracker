// const Workout = require("../models/Workout.js");
const db = require("../models")
const router = require('express').Router();


  router.post("/api/workouts", (req , res) => {
    db.Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
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

  router.get("/api/workouts", (req, res) => {
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
  router.get("/api/workouts/:id", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          _id: req.params.id,
          totalDuration: { $sum: "$exercises.duration"},
        },
      },
    ])
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration"},
        },
      },
    ])
    .limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // create delete routes
  router.delete("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndDelete(req.params.id)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;



