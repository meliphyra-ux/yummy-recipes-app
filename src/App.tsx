import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './roots/navigation/Navigation';
import Home from './roots/home/Home';
import Recipes from './roots/recipes/Recipes';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
