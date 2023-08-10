import { useContext, useEffect } from 'react';
import { useRecipes } from '~/hooks/useRecipes';

import {
  switchRecipesPage,
  setAmountOfPages,
} from '~/contexts/actions/recipesActions';

import { RecipesContext } from '~/contexts/RecipesContext';

import Loader from '~/components/ui/Loader/Loader';
import RecipeCards from '~/components/features/RecipeCards/RecipeCards';
import Pagination from '~/components/features/Pagination/Pagination';
import { StyledRecipesContainer } from './StyledRecipes';

const Recipes = () => {
  const { currentPage, amountOfPages, dispatch } = useContext(RecipesContext);
  const {
    recipes,
    amountOfPages: newAmountOfPages,
    isLoading,
  } = useRecipes(currentPage, 16);

  useEffect(() => {
    dispatch(switchRecipesPage(recipes));
    if (newAmountOfPages !== amountOfPages)
      dispatch(setAmountOfPages(newAmountOfPages));
  }, [recipes, newAmountOfPages]);

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
