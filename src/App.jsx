import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const movieNumber = 1;
  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Tim's Film", release_date: "2024" }} />
      ) : (
        <MovieCard movie={{ title: "Joe's Film", release_date: "2024" }} />
      )}
    </>
  );
}

export default App;
