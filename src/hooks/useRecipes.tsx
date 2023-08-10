import { useEffect, useState } from 'react';
import { FetchAPIParams, fetchAPIData } from '~/utils/api';
import { ListResponse, Recipe } from '~/utils/types';

export const useRecipes = (currentPage: number, recipesAmount: number) => {
  const [data, setData] = useState<ListResponse>({
    count: 0,
    results: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { count, results: recipes } = data;

  const amountOfPages = Math.floor(+(count / recipesAmount));

  useEffect(() => {
    const FETCH_PARAMS: FetchAPIParams = {
      endpoint: '/recipes/list',
      params: {
        from: currentPage * recipesAmount,
        size: recipesAmount,
      },
    };

    async function getRecipes() {
      setIsLoading(true);
      try {
        const data = await fetchAPIData<ListResponse>(FETCH_PARAMS);
        if (data instanceof Error) {
          throw new Error('An error occured. Try again later.');
        }
        setData(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }
    getRecipes();
  }, [currentPage]);
  return { recipes, amountOfPages, isLoading, error };
};
