import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './pages/navigation/Navigation';
import Home from './pages/home/Home';
import Recipes from './pages/recipes/Recipes';
import Recipe from './pages/recipe/Recipe';

import WithRecipesProvider from './components/features/WithRecipesProvider/WithRecipesProvider';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/recipes"
          element={<WithRecipesProvider page={<Recipes />} />}
        />
        <Route
          path="/recipes/:id"
          element={<WithRecipesProvider page={<Recipe />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
