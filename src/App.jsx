// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import MainPage from "./pages/mainPage/MainPage";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import MoviePage from "./pages/moviePage/MoviePage";
import UserPage from "./pages/userPage/UserPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
