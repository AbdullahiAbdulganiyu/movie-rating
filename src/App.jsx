import "./App.css";
import Home from "./pages/Home";

function App() {
  const handlSearch = () => {};

  return (
    <>
      <form onSubmit={handlSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
      </form>
      <Home />
    </>
  );
}

export default App;
