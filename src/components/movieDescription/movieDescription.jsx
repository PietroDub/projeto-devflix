import { useEffect, useState } from "react";
import styles from "./movieDescription.module.css";
import devFlix from "/favicon.png";

const MovieDesc = ({ movies, click }) => {
  const apiKey = "2a78f616";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}&i=${movies.imdbID}`;
  const [moviesDesc, setMoviesDesc] = useState([]);

  // console.log(movies.imdbID);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setMoviesDesc(data))
      .catch((error) => console.error("Erro: ", error));
  }, [apiUrl]);

  const movie = moviesDesc;

  return (
    <div className={styles.modalBackground} onClick={click}>
      <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.movieInfo}>
          <img src={movies.Poster} alt={movie.Title} />
          <button className={styles.btnClose} onClick={click}>
            X
          </button>
          <div className={styles.movieType}>
            <div>
              <img src={devFlix} alt="Logo DEVFLIX" />
              {movie.Type}
              <h2>{movie.Title}</h2>
              <a
                href={`https://google.co/search?q=${encodeURIComponent(
                  movie.Title
                )}`}
                target="_blank"
              >
                ▶️Assistir
              </a>
            </div>
          </div>
        </div>
        <div className={styles.containerMisc}>
          <div className={styles.containerflex}>
            {movie.imdbRating}/10 relevante | Duração: {movie.Runtime} |{" "} {movie.Year}
            <p>Elenco: {movie.Actors}</p>
            <p>Gêneros: {movie.Genre}</p>
          </div>
        </div>
        <div className={styles.desc}>
          <p>Sinopse: {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDesc;