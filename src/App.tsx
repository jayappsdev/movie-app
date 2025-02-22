import { Routes, Route } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import AddMoviePage from './pages/AddMoviePage';
import EditMoviePage from './pages/EditMoviePage';
import DetailMoviePage from './pages/DetailMoviePage';
import { ToastContainer } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";   

const App: React.FC = () => {
  return (     
    <>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="movie">
          <Route path="add" element={<AddMoviePage />} />
          <Route path="edit/:id" element={<EditMoviePage />} />
          <Route path="view/:id" element={<DetailMoviePage />} />
        </Route>
      </Routes>
  
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};

export default App;

