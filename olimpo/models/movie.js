const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: Number, required: true },
    director: { type: String, required: true },
    starring: [
      {
        actor: { type: String, required: true },
        role: { type: String, required: true },
      },
    ],
    rating: [
      {
        source: { type: String, required: true },
        point: { type: Number, required: true },
        date: { type: Date, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("movie", movieSchema);
