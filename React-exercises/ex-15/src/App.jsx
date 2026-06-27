import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Recipes from './Recipes'; 
import Categories from './Categories';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;