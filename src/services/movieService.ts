import { Movie } from '../models/Movie';
import { v4 as uuidv4 } from "uuid";  

const MOVIES_KEY = 'movies';

export const getMovies = (): Movie[] => {
  return JSON.parse(localStorage.getItem(MOVIES_KEY) || '[]');
};

export const getMovieById = (id: string): Movie | null => { 
  const movies: Movie[] = getMovies();
  return movies.find((movie) => movie.id === id) || null;
};

export const addMovie = (movie: Omit<Movie, 'id'>): void => {
  const movies = getMovies();
  const newMovie: Movie = { id: uuidv4(), ...movie }; 
  localStorage.setItem(MOVIES_KEY, JSON.stringify([...movies, newMovie]));
};

export const updateMovie = (updatedMovie: Movie): void => {
  const movies: Movie[] = getMovies();
  const updatedMovies = movies.map((m) => (m.id === updatedMovie.id ? updatedMovie : m));
  localStorage.setItem(MOVIES_KEY, JSON.stringify(updatedMovies));
};

export const deleteMovie = (id: string): void => {  
  const movies = getMovies().filter(movie => movie.id !== id);
  localStorage.setItem(MOVIES_KEY, JSON.stringify(movies));
};

