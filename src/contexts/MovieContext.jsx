import { createContext, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
  useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  return <MovieContext.Provider>{children}</MovieContext.Provider>;
};
