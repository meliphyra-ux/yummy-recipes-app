import { ActionWithPayload, Recipe } from '~/utils/types';
import { RecipesReducerProps } from '../RecipesContext';

export enum RECIPES_ACTIONS {
  SWITCH_RECIPE_PAGE = 'recipes/SWITCH_RECIPE_PAGE',
  CHANGE_CURRENT_PAGE = 'recipes/CHANGE_CURRENT_PAGE',
  SET_AMOUNT_OF_PAGES = 'recipes/SET_AMOUNT_OF_PAGES',
  SET_STATE = 'recipes/SET_STATE',
}

export type RecipesActions =
  | ActionWithPayload<RECIPES_ACTIONS.SWITCH_RECIPE_PAGE, Recipe[]>
  | ActionWithPayload<RECIPES_ACTIONS.CHANGE_CURRENT_PAGE, number>
  | ActionWithPayload<RECIPES_ACTIONS.SET_AMOUNT_OF_PAGES, number>
  | ActionWithPayload<
      RECIPES_ACTIONS.SET_STATE,
      Omit<RecipesReducerProps, 'currentPage'>
    >;

export const switchRecipesPage = (
  recipesPage: Recipe[]
): ActionWithPayload<RECIPES_ACTIONS.SWITCH_RECIPE_PAGE, Recipe[]> => ({
  type: RECIPES_ACTIONS.SWITCH_RECIPE_PAGE,
  payload: recipesPage,
});
export const changeCurrentPage = (
  page: number
): ActionWithPayload<RECIPES_ACTIONS.CHANGE_CURRENT_PAGE, number> => ({
  type: RECIPES_ACTIONS.CHANGE_CURRENT_PAGE,
  payload: page,
});
export const setAmountOfPages = (
  amountOfPages: number
): ActionWithPayload<RECIPES_ACTIONS.SET_AMOUNT_OF_PAGES, number> => ({
  type: RECIPES_ACTIONS.SET_AMOUNT_OF_PAGES,
  payload: amountOfPages,
});
export const setState = (
  newState: Omit<RecipesReducerProps, 'currentPage'>
): ActionWithPayload<
  RECIPES_ACTIONS.SET_STATE,
  Omit<RecipesReducerProps, 'currentPage'>
> => ({
  type: RECIPES_ACTIONS.SET_STATE,
  payload: newState,
});
