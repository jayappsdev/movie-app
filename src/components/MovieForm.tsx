import { useState } from 'react';
import { Movie } from '../models/Movie';
import { v4 as uuidv4 } from "uuid";

interface MovieFormProps {
  initialData?: Movie;
  onSubmit: (movie: Movie) => void;
  onCancel: () => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [director, setDirector] = useState(initialData?.director || '');
  const [year, setYear] = useState(initialData?.year || '');
  const [description, setDescription] = useState(initialData?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !director || !year || !description) {
      alert('Vyplňte všetky polia!');
      return;
    }

    const newMovie: Movie = {
      id: initialData?.id || uuidv4(),
      title,
      director,
      year: Number(year),
      description,
    };

    onSubmit(newMovie);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <label className="form-label"><i className="bi bi-film"></i> Názov filmu</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label"><i className="bi bi-person"></i> Režisér</label>
        <input type="text" className="form-control" value={director} onChange={(e) => setDirector(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label"><i className="bi bi-calendar"></i> Rok vydania</label>
        <input type="number" className="form-control" value={year} onChange={(e) => setYear(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label"><i className="bi bi-card-text"></i> Popis</label>
        <textarea className="form-control" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-success">Uložiť</button>
      <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>Zrušiť</button>
    </form>
  );
};

export default MovieForm;
