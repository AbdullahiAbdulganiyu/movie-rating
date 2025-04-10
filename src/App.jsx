import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/favorites";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  );
}

export default App;
