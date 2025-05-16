import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/register" element={ <Register /> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/movie/:id"  element={ <MovieDetails /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
