const Movie = require("./../models/movie")

exports.getAllMovies = async(req, res) => {
    try{
        const movies = await Movie.find()
        res.status(200).json(movies);
    }catch(err){
        res.status(500).json({ message: "Error Fetching All Movies", error: err.message })
    }
}

exports.getMovieById = async(req, res) => {
    try{
        const movies = await Movie.findById(req.params.id);
        if(!movies) return res.status(404).json({message: "Movie not found"});
        res.status(200).json(movies)
    }catch(err){
        res.status(500).json({ message: "Error Fetching All Movies", error: err.message })
    }
}

exports.createMovie = async(req, res) => {
    try{
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    }catch(err){
        res.status(500).json({message: "Error creating movie", error: err.message});
    }
}