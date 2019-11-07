const mongoose = require("mongoose");

//Favor Model
const Favor = mongoose.model("favors");

// @route   GET
// @desc    Get all items
// @access  Public
module.exports = app => {
  app.get("/api/favors", (req, res) => {
    Favor.find().then(favors => res.json(favors));
  });
};

// @route   Post
// @desc    Create all item
// @access  Public
// TESTING API --> NEEDS REFACTORING
module.exports = app => {
  app.post("/api/favors", (req, res) => {
    const newFavor = new Favor({
      favorName: req.body.favorName,
      favorDescription: req.body.favorDescription
    });

    newFavor.save().then(favor => res.json(favor));
  });
};
