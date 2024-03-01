import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import FilmDetails from './pages/FilmDetails';
import '../src/styles/App.css';

function App() {

  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film/:id" element={<FilmDetails />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
