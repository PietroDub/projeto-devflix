import { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/devcoisa.png";
import searchIcon from "../assets/search.png";
import fireImage from "../assets/fire.png"
import "./App.css";
import MovieCard from "../components/movieCard/movieCard";
import Footer from "../components/footer/footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const apiKey = "2a78f616";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search);
  };
  const handleKeyPress = (e) => {
    e === "Enter" && searchMovies(searchTerm);
    searchMovies(searchTerm);
  };

  //fetch(apiUrl)
  // .then((Response) => Response.json())
  // .then((data) => console.log(data));

  return (
    <div id="app">
      <div className="grupolegal">
        <div className="logo">
          <img
            src={logo}
            alt="src/assets/016fed143773ec247f2069a83192657c 1.png"
          />
        </div>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Pesquisar por filmes"
          />
          <div className="si">
            <img
              src={searchIcon}
              alt=""
              onClick={() => searchMovies(searchTerm)}
            />
           
          </div>
        
        
        </div>
        
      </div>
      <div className="Trend">
            <a>Trending now</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="50" viewBox="0 0 25 75" fill="none">
<path d="M55.1875 35C54.4687 34.0625 53.5937 33.25 52.7812 32.4375C50.6875 30.5625 48.3125 29.2188 46.3125 27.25C41.6562 22.6875 40.625 15.1562 43.5937 9.375C40.625 10.0938 38.0312 11.7188 35.8125 13.5C27.7187 20 24.5312 31.4688 28.3437 41.3125C28.4687 41.625 28.5937 41.9375 28.5937 42.3438C28.5937 43.0312 28.125 43.6562 27.5 43.9062C26.7812 44.2188 26.0312 44.0312 25.4375 43.5312C25.2591 43.3837 25.1105 43.2034 25 43C21.4687 38.5312 20.9062 32.125 23.2812 27C18.0625 31.25 15.2187 38.4375 15.625 45.2188C15.8125 46.7812 16 48.3438 16.5312 49.9062C16.9687 51.7812 17.8125 53.6563 18.75 55.3125C22.125 60.7188 27.9687 64.5938 34.25 65.375C40.9375 66.2188 48.0937 65 53.2187 60.375C58.9375 55.1875 60.9375 46.875 58 39.75L57.5937 38.9375C56.9375 37.5 55.1875 35 55.1875 35ZM45.3125 54.6875C44.4375 55.4375 43 56.25 41.875 56.5625C38.375 57.8125 34.875 56.0625 32.8125 54C36.5312 53.125 38.75 50.375 39.4062 47.5938C39.9375 45.0938 38.9375 43.0312 38.5312 40.625C38.1562 38.3125 38.2187 36.3437 39.0625 34.1875C39.6562 35.375 40.2812 36.5625 41.0312 37.5C43.4375 40.625 47.2187 42 48.0312 46.25C48.1562 46.6875 48.2187 47.125 48.2187 47.5938C48.3125 50.1562 47.1875 52.9688 45.3125 54.6875Z" fill="#F8F8F8"/>
</svg>
            </div>
      {movies?.length > 0 ? (
        <div className="container">

          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movies={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nenhum filme encontrado 😏</h2>
        </div>
      )}
      <Footer link={"https:github.com.br"}>Pietro/</Footer>
    </div>
  );
};

export default App;
