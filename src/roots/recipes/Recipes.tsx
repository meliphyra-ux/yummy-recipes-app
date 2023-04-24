import { useContext, useEffect, useState, useReducer } from 'react';

import { fetchDataFromAPI } from '../../main';
import { FetchAPIParams } from '../../utils/api';

import { LoaderContext } from '../../contexts/LoaderContext';
import Loader from '../../components/loader/Loader';

import styles from './recipes.module.scss';
import { ListResponse, Recipe } from '../../utils/types';
import RecipeBlocks from '../../components/recipe-blocks/Recipe-blocks';
import { RecipesReducerProps, recipesReducer } from './RecipesReducer';

const INITIAL_STATE: RecipesReducerProps = {
  count: 0,
  recipes: [],
};

const Recipes = () => {
  const [page, setPage] = useState(0);
  const [state, dispatch] = useReducer(recipesReducer, INITIAL_STATE);

  const { recipes, count } = state;

  const { isLoading, setIsLoading } = useContext(LoaderContext);

  useEffect(() => {
    const FETCH_PARAMS: FetchAPIParams = {
      endpoint: '/recipes/list',
      params: {
        from: page,
        size: 16,
      },
    };
    setIsLoading(true);
    fetchDataFromAPI<ListResponse>(FETCH_PARAMS)
      .then((data) => {
        if (data instanceof Error) {
          Promise.reject(data);
        } else {
          dispatch({ count: data.count, recipes: data.results });
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [page]);
  return (
    <section className={styles['recipes-page-container']}>
      {isLoading ? <Loader /> : <RecipeBlocks recipes={recipes} />}
    </section>
  );
};

export default Recipes;
