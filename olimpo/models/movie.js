const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  starring: [
    {
      actor: { type: String, required: true },
      role: { type: String, required: true }
    }
  ],
  ratings: [
    {
      source: { type: String, required: true },
      score: { type: Number, required: true },
      date: { type: Date, required: true }
    }
  ]
});

module.exports = mongoose.model("Movie", movieSchema);
