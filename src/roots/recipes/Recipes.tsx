import {
  useContext,
  useEffect,
} from 'react';

import { FetchAPIParams, fetchAPIData } from '~/utils/api';
import { switchRecipesPage, setAmountOfPages } from '~/contexts/actions/recipesActions';

import { RecipesContext } from '~/contexts/RecipesContext';
import { LoaderContext } from '~/contexts/LoaderContext';

import { ListResponse } from '~/utils/types';

import Loader from '~/components/ui/loader/Loader';
import RecipeCards from '~/components/features/recipe-blocks/RecipeCards';
import Pagination from '~/components/features/pagination/Pagination';

import styles from './recipes.module.scss';

const amountOfRecipesOnPage = 16;

const Recipes = () => {
  const { currentPage, dispatch } =
    useContext(RecipesContext);

  const { isLoading, setIsLoading } = useContext(LoaderContext);

  useEffect(() => {
    const FETCH_PARAMS: FetchAPIParams = {
      endpoint: '/recipes/list',
      params: {
        from: currentPage * amountOfRecipesOnPage,
        size: amountOfRecipesOnPage,
      },
    };
    setIsLoading(true);
    fetchAPIData<ListResponse>(FETCH_PARAMS)
      .then((data) => {
        if (data instanceof Error) {
          Promise.reject(data);
        } else {
          const amountOfPages = +(data.count / amountOfRecipesOnPage).toFixed();
          dispatch(switchRecipesPage(data.results));
          dispatch(setAmountOfPages(amountOfPages))
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [currentPage]);
  return (
    <section className={styles['recipes-page-container']}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <RecipeCards />
          <Pagination />
        </>
      )}
    </section>
  );
};

export default Recipes;
