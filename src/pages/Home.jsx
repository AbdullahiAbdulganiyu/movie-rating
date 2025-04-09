import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 1, title: "Terminator", release_date: "1997" },
    { id: 1, title: "The Matrix", release_date: "1998" },
  ];

  const handlSearch = () => {};
  return (
    <div className="home">
      <form onSubmit={handlSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
