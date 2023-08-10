import { useContext, useEffect } from 'react';

import { RecipesContext } from '~/contexts/RecipesContext';

import Loader from '~/components/ui/Loader/Loader';
import RecipeCards from '~/components/features/RecipeCards/RecipeCards';
import Pagination from '~/components/features/Pagination/Pagination';
import { StyledRecipesContainer } from './StyledRecipes';

const Recipes = () => {
  const { isLoading } = useContext(RecipesContext);

  useEffect(() => {
    document.title = 'Recipes - Yummy!';
    return () => {
      document.title = 'Yummy!';
    };
  }, []);
  return (
    <StyledRecipesContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <RecipeCards />
          <Pagination />
        </>
      )}
    </StyledRecipesContainer>
  );
};

export default Recipes;
