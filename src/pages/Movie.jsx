import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(r => r.json())
      .then(data => setMovie(data))
      .catch(error => console.error(error))
  }, [movieId])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movie ? (
          <>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index} style={{ marginRight: '8px' }}>{genre}</span>
          ))}
        </div>
        </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
};

export default Movie;
