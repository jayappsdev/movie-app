import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "../models/Movie";
import { getMovies, deleteMovie } from "../services/movieService";
import { toast } from "react-toastify";
import ConfirmDialog from "../components/ConfirmDialog";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  const handleDelete = () => {
    if (selectedMovieId !== null) {
      deleteMovie(selectedMovieId);
      setMovies(getMovies());
      setShowConfirm(false);
      toast.success("Film bol úspešne odstránený!");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">
        <i className="bi bi-film"></i> Zoznam filmov
      </h2>

      <Link to="/movie/add" className="btn btn-primary mb-3">
        <i className="bi bi-plus-circle"></i> Pridať film
      </Link>

      {movies.length === 0 ? (
        <p className="alert alert-warning">Zatiaľ nie sú pridané žiadne filmy.</p>
      ) : (
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Názov</th>
              <th>Režisér</th>
              <th>Rok</th>
              <th>Akcie</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.year}</td>
                <td>
                  <Link to={`/movie/view/${movie.id}`} className="btn btn-info btn-sm me-2">
                    <i className="bi bi-eye"></i>
                  </Link>
                  <Link to={`/movie/edit/${movie.id}`} className="btn btn-warning btn-sm me-2">
                    <i className="bi bi-pencil"></i>
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      setSelectedMovieId(movie.id);
                      setShowConfirm(true);
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <ConfirmDialog
        show={showConfirm}
        message="Naozaj chcete odstrániť tento film?"
        onConfirm={handleDelete}
        onCancel={() => setShowConfirm(false)}
      />
    </div>
  );
};

export default MovieList;

