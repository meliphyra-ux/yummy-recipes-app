import { ActionWithPayload, Recipe } from '~/utils/types';

export enum RECIPES_ACTIONS {
  ADD_RECIPE_PAGE = 'recipes/ADD_RECIPE_PAGE',
  CHANGE_CURRENT_PAGE = 'recipes/CHANGE_CURRENT_PAGE',
  SET_AMOUNT_OF_PAGES = 'recipes/SET_AMOUNT_OF_PAGES',
}

export type RecipesActions =
  | ActionWithPayload<RECIPES_ACTIONS.ADD_RECIPE_PAGE, Recipe[]>
  | ActionWithPayload<RECIPES_ACTIONS.CHANGE_CURRENT_PAGE, number>
  | ActionWithPayload<RECIPES_ACTIONS.SET_AMOUNT_OF_PAGES, number>;

export const addRecipesPage = (recipesPage: Recipe[]): ActionWithPayload<RECIPES_ACTIONS.ADD_RECIPE_PAGE, Recipe[]> => ({
  type: RECIPES_ACTIONS.ADD_RECIPE_PAGE,
  payload: recipesPage,
});
export const changeCurrentPage = (page: number): ActionWithPayload<RECIPES_ACTIONS.CHANGE_CURRENT_PAGE, number> => ({
  type: RECIPES_ACTIONS.CHANGE_CURRENT_PAGE,
  payload: page,
});
export const setAmountOfPages = (amountOfPages: number): ActionWithPayload<RECIPES_ACTIONS.SET_AMOUNT_OF_PAGES, number> => ({
  type: RECIPES_ACTIONS.SET_AMOUNT_OF_PAGES,
  payload: amountOfPages,
});
