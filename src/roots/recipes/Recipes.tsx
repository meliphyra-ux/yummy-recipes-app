import { useEffect, useState } from 'react';
import styles from './recipes.module.scss';
import { fetchDataFromAPI } from '../../main';
import { FetchAPIParams } from '../../utils/api';
import { ListResponse, Recipe } from '../../utils/types';
import RecipeBlocks from '../../components/recipe-blocks/Recipe-blocks';

const Recipes = () => {
  const [page, setPage] = useState(0);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoaderActive, setIsLoaderActive] = useState(false)
  useEffect(() => {
    const FETCH_PARAMS: FetchAPIParams = {
      endpoint: '/recipes/list',
      params: {
        from: page,
        size: 16,
      }
    }
    
    fetchDataFromAPI<ListResponse>(FETCH_PARAMS)
      .then((data) => {
        if (data instanceof Error) {
          Promise.reject(data);
        } else {
          setRecipes(data.results);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
    }, [page]);
  return (
    <section className={styles['recipes-page-container']}>
      <RecipeBlocks recipes={recipes} />
    </section>
  );
};

export default Recipes;
