import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => {
        console.error("Axios error:", err);
        alert("Failed to fetch movies");
      });
  }, []);

  return (
    <>
      <div>
        <h2>All Movies</h2>
        {movies.map((movie) => (
          <div key={movie._id}>
            <Link to={`/movie/${movie._id}`}>
              <h3>
                {movie.title} ({movie.year}){" "}
              </h3>
            </Link>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
