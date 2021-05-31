var path = require("path");

module.exports = function(app) {
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};

// wont work with stats route as well
module.exports = function(app) {
    app.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
};

// module.exports = function(app) {
//     app.get("/stats", function(req, res) {
//       res.sendFile(path.join(__dirname, "../public/stats.html"));
//     });
// };