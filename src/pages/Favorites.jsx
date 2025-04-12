import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites)
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies yet</h2>
      <p>Start adding movies to your favorite and they would appear here</p>
    </div>
  );
}

export default Favorites;
