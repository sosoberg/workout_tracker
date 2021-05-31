var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.updateOne({ _id: req.params.id }, { likes: req.body.likes }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
