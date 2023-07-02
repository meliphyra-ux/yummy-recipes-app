import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './roots/navigation/Navigation';
import Home from './roots/home/Home';
import Recipes from './roots/recipes/Recipes';
import RecipesProvider from './contexts/RecipesContext';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <RecipesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </RecipesProvider>
    </BrowserRouter>
  );
};

export default App;
