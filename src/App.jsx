import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import ErrorPages from './pages/ErrorPages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<ErrorPages />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;