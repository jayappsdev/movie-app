import { useNavigate } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import { addMovie } from '../services/movieService';
import { Movie } from '../models/Movie';
import { toast } from "react-toastify";  

const AddMoviePage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddMovie = (movie: Movie) => {
    addMovie(movie);
    toast.success("Film bol úspešne pridaný!");
    setTimeout(() => navigate('/')); 
  };

  return (
    <div className="container mt-4">
      <h2>
        <i className="bi bi-plus-circle"></i> Pridať nový film
      </h2>
      <MovieForm onSubmit={handleAddMovie} onCancel={() => navigate('/')} />
    </div>
  );
};

export default AddMoviePage;
