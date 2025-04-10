import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favorite from "./pages/favorites";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </main>
  );
}

export default App;
