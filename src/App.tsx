import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Recipes from './pages/Recipes/Recipes';
import Recipe from './pages/Recipe/Recipe';
import Contacts from './pages/Contacts/Contacts';

import WithRecipesProvider from './components/features/WithRecipesProvider/WithRecipesProvider';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

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
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
