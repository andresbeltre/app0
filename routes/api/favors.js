//Favor Model
const mongoose = require("mongoose");
const Favor = mongoose.model("favors");

module.exports = app => {
  // @route   GET api/favors
  // @desc    Get all items
  // @access  Public
  app.get("/api/favors", (req, res) => {
    Favor.find().then(favors => res.json(favors));
  });

  // @route   Post
  // @desc    Create all item
  // @access  Public
  app.post("/api/favors", (req, res) => {
    const newFavor = new Favor({
      favorName: req.body.favorName,
      favorDescription: req.body.favorDescription,
      favorDate: req.body.favorDate
    });

    newFavor.save().then(favor => res.json(favor));
  });

  // @route   Delete
  // @desc    Delete a Favor by ID
  // @access  Public
  // TODO DELETE METHOD
};

// Favor.find().then(favors => res.status(200).json(favors)).catch(error => res.status(500).json(error))
// use this to check in react if request was good or not
