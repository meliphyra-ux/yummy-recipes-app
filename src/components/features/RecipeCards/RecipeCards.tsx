import { useContext } from 'react';

import { RecipesContext } from '~/contexts/RecipesContext';

import { Link } from 'react-router-dom';

import RecipeCard from '~/components/ui/recipe-card/RecipeCard';
import StyledRecipeCards from './StyledRecipeCards';

const RecipeCards = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <StyledRecipeCards>
      {recipes.map((recipe) => (
        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
          <RecipeCard {...recipe} />
        </Link>
      ))}
    </StyledRecipeCards>
  );
};

export default RecipeCards;
