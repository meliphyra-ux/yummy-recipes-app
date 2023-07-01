import { ReactNode, createContext, useReducer } from 'react';
import { Recipe } from '~/utils/types';
import {
  RECIPES_ACTIONS,
  RecipesActions,
  changeCurrentPage,
} from './actions/recipesActions';

type RecipesReducerProps = {
  amountOfPages: number;
  currentPage: number;
  recipes: Recipe[];
};

const INITIAL_STATE = {
  amountOfPages: 0,
  currentPage: 1,
  recipes: [],
};

const recipesReducer = (
  state: RecipesReducerProps,
  action: RecipesActions
): RecipesReducerProps => {
  const { type, payload } = action;
  switch (type) {
    case RECIPES_ACTIONS.ADD_RECIPE_PAGE: {
      return { ...state, recipes: [...state.recipes, ...payload] };
    }
    case RECIPES_ACTIONS.CHANGE_CURRENT_PAGE: {
      return { ...state, currentPage: payload };
    }
    case RECIPES_ACTIONS.SET_AMOUNT_OF_PAGES: {
      return { ...state, amountOfPages: payload };
    }
    default: {
      return { ...state };
    }
  }
};

export const RecipesContext = createContext(INITIAL_STATE);

const RecipesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(recipesReducer, INITIAL_STATE);
  const moveToPage = (page: number) => {
    dispatch(changeCurrentPage(page));
  };
  return (
    // <RecipesContext.Provider>{children}</RecipesContext.Provider>
    <></>
  );
};
