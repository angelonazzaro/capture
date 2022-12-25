import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";

import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from './pages/MovieDetails';
import { MovieState } from './movieState';

function App() {

  const movies = useState(MovieState)[0]; // get the actual data

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/work" exact element={<OurWork movies={movies} />} />
        <Route path="/work/:id" element={<MovieDetails movies={movies}/>} />
        <Route path="/contactus" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
