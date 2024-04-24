import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Logement from './pages/Logement/Logement';
import ErrorPages from './pages/ErrorPages/ErrorPages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/erreur" element={<ErrorPages />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<ErrorPages />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;