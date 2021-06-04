const router = require("express").Router();
const Workout = require("../models/Workout");
const Exercise = require("../models/Exercise");

router.post("/api/exercises", ({ body }, res) => {
  Exercise.create(body)
    .then(dbExercises => {
      res.json(dbExercises);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/exercises/bulk", ({ body }, res) => {
  Exercise.insertMany(body)
    .then(dbExercises => {
      res.json(dbExercises);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/exercises", (req, res) => {
  Exercise.find({})
    .then(dbExercises => {
      res.json(dbExercises);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/bulk", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;


