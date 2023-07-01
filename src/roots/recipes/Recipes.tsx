import {
  useContext,
  useEffect,
  useState,
  useReducer,
  ChangeEvent,
} from 'react';

import styles from './recipes.module.scss';

import { FetchAPIParams, fetchAPIData } from '~/utils/api';

import { LoaderContext } from '~/contexts/LoaderContext';

import Loader from '~/components/ui/loader/Loader';

import { ListResponse } from '~/utils/types';
import RecipeCards from '~/components/features/recipe-blocks/RecipeCards';
import { RecipesReducerProps, recipesReducer } from './recipesReducer';
import Pagination from '~/components/features/pagination/Pagination';

const amountOfRecipesOnPage = 16;

const INITIAL_STATE: RecipesReducerProps = {
  amountOfPages: 0,
  recipes: [],
};

const Recipes = () => {
  // IMPORTANT!!!!! Move currentPage to RecipesReducer to avoid prop drilling.
  const [currentPage, setCurrentPage] = useState(1);
  const [state, dispatch] = useReducer(recipesReducer, INITIAL_STATE);

  const { recipes, amountOfPages } = state;

  const { isLoading, setIsLoading } = useContext(LoaderContext);

  useEffect(() => {
    const FETCH_PARAMS: FetchAPIParams = {
      endpoint: '/recipes/list',
      params: {
        from: currentPage,
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
          dispatch({
            payload: { amountOfPages, recipes: data.results },
          });
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [currentPage]);

  const moveToPage = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(Number(e.target.value));
  };
  return (
    <section className={styles['recipes-page-container']}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <RecipeCards recipes={recipes} />
          <Pagination amountOfPages={amountOfPages} currentPage={currentPage} />
        </>
      )}
    </section>
  );
};

export default Recipes;
