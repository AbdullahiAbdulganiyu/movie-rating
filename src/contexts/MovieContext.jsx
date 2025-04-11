import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
  useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFav = localStorage.getItem("favorites");
    if (storedFav) setFavorites(JSON.parse(storedFav));
  }, []);

  return <MovieContext.Provider>{children}</MovieContext.Provider>;
};
