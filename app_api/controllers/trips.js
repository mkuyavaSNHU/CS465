const mongoose = require("mongoose");
const Model = mongoose.model("trips");

// GET: /trips - Returns all trips in database
const tripsList = async (req, res) => {
  Model.find({}).exec((err, trips) => { 
    if (!trips) {
      return res.status(404).json({ message: "Trips not found" }); //If no trips are found error returned
    } else if (err) {
      return res.status(404).json(err); //If in error is returned -Render in json
    } else {
      return res.status(200).json(trips); //success - Render as json
    }
  });
};

// GET: /trips/:tripCode - Returns a single trip from the database using tripCode
const tripsFindCode = async (req, res) => {
  Model.find({ code: req.params.tripCode }).exec((err, trip) => { 
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" }); //If no trips are found error returned
    } else if (err) {
      return res.status(404).json(err); //If in error is returned -Render in json
    } else {
      return res.status(200).json(trip); //success - Render as json
    }
  });
};

module.exports = {
  tripsList,
  tripsFindCode,
};