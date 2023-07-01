import { Recipe } from '~/utils/types';

export type RecipesReducerProps = {
  amountOfPages: number;
  recipes: Recipe[];
};

export const recipesReducer = (
  state: RecipesReducerProps,
  action: { payload: RecipesReducerProps}
) => {
  return {
    ...state,
    ...action.payload,
  };
};
