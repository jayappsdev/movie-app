import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from '../services/movieService';
import { Movie } from '../models/Movie';

const ViewMoviePage: React.FC = () => {
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

  return (
    <div className="container mt-4">
      <h2>
        <i className="bi bi-camera-reels-fill"></i> Detail filmu
      </h2>
      {movie ? (
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text"><strong>ID:</strong> {movie.id}</p>
            <p className="card-text"><strong>Režisér:</strong> {movie.director}</p>
            <p className="card-text"><strong>Rok vydania:</strong> {movie.year}</p>
            <p className="card-text"><strong>Popis:</strong> {movie.description}</p>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>
              <i className="bi bi-arrow-left"></i> Späť na zoznam
            </button>
          </div>
        </div>
      ) : (
        <p className="alert alert-info">Načítavam údaje...</p>
      )}
    </div>
  );
};

export default ViewMoviePage;
