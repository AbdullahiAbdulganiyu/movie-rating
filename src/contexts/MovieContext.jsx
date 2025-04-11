import { createContext, useContext } from "react";

const MovieContext = createContext();

const useMovieContext = () => {
  useContext(MovieContext);
};
