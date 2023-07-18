import { useContext, useEffect } from 'react';

import { FetchAPIParams, fetchAPIData } from '~/utils/api';
import {
  switchRecipesPage,
  setAmountOfPages,
} from '~/contexts/actions/recipesActions';

import { RecipesContext } from '~/contexts/RecipesContext';
import { LoaderContext } from '~/contexts/LoaderContext';

import { ListResponse } from '~/utils/types';

import Loader from '~/components/ui/Loader/Loader';
import RecipeCards from '~/components/features/RecipeCards/RecipeCards';
import Pagination from '~/components/features/Pagination/Pagination';
import { StyledRecipesContainer } from './StyledRecipes';

const amountOfRecipesOnPage = 16;

const Recipes = () => {
  const { currentPage, dispatch } = useContext(RecipesContext);

  const { isLoading, setIsLoading } = useContext(LoaderContext);

  useEffect(() => {
    const FETCH_PARAMS: FetchAPIParams = {
      endpoint: '/recipes/list',
      params: {
        from: currentPage * amountOfRecipesOnPage,
        size: amountOfRecipesOnPage,
      },
    };
    document.title = 'Recipes - Yummy!';
    setIsLoading(true);
    fetchAPIData<ListResponse>(FETCH_PARAMS)
      .then((data) => {
        if (data instanceof Error) {
          Promise.reject(data);
        } else {
          const amountOfPages = +(data.count / amountOfRecipesOnPage).toFixed();
          dispatch(switchRecipesPage(data.results));
          dispatch(setAmountOfPages(amountOfPages));
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
    return () => {
      document.title = 'Yummy!';
    };
  }, [currentPage]);
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
