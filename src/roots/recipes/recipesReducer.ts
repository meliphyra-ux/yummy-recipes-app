import { Recipe } from '../../utils/types';

export type RecipesReducerProps = {
  count: number;
  recipes: Recipe[];
};

export const recipesReducer = (
  state: RecipesReducerProps,
  action: RecipesReducerProps
) => {
  return {
    ...state,
    ...action,
  };
};
