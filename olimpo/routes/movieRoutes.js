const express = require("express");
const { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie } = require("../controllers/movieControllers");
const protect = require("../middlewares/protect");

const router = express.Router();

router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.post("/", protect, createMovie);
router.put("/:id", protect, updateMovie);
router.delete("/:id", protect, deleteMovie);

module.exports = router;
