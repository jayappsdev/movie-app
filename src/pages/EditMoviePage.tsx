import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import { getMovieById, updateMovie } from '../services/movieService';
import { Movie } from '../models/Movie';
import { toast } from "react-toastify";

const EditMoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (!id) return;
    
    const foundMovie = getMovieById(id);
    if (!foundMovie) {
      alert('Film nebol nájdený!');
      navigate('/');
    } else {
      setMovie(foundMovie);
    }
  }, [id, navigate]);

  const handleUpdateMovie = (updatedMovie: Movie) => {
    updateMovie(updatedMovie);
    toast.success("Film bol úspešne upravený!");
    navigate('/'); 
  };

  return (
    <div className="container mt-4">
      <h2>
        <i className="bi bi-pencil-square"></i> Upraviť film
      </h2>
      {movie ? (
        <MovieForm initialData={movie} onSubmit={handleUpdateMovie} onCancel={() => navigate('/')} />
      ) : (
        <p className="alert alert-danger">Načítavam údaje...</p>
      )}
    </div>
  );
};

export default EditMoviePage;
