import {
  ReactNode,
  createContext,
  useReducer,
  Dispatch,
  useEffect,
} from 'react';
import { useRecipes } from '~/hooks/useRecipes';

import { Recipe } from '~/utils/types';

import {
  RECIPES_ACTIONS,
  RecipesActions,
  setState,
} from './actions/recipesActions';

export type RecipesReducerProps = {
  amountOfPages: number;
  currentPage: number;
  recipes: Recipe[];
  isLoading: boolean;
};

const INITIAL_STATE = {
  amountOfPages: 0,
  currentPage: 1,
  recipes: [],
  dispatch: () => {},
  isLoading: false,
} as RecipesReducerProps & {
  dispatch: Dispatch<RecipesActions>;
};

const recipesReducer = (
  state: RecipesReducerProps,
  action: RecipesActions
): RecipesReducerProps => {
  const { type, payload } = action;
  switch (type) {
    case RECIPES_ACTIONS.SWITCH_RECIPE_PAGE: {
      return { ...state, recipes: payload };
    }
    case RECIPES_ACTIONS.SET_STATE: {
      return { ...state, ...payload };
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

  const { recipes, amountOfPages, isLoading } = useRecipes(
    state.currentPage,
    16
  );

  useEffect(() => {
    dispatch(setState({ recipes, amountOfPages, isLoading }));
  }, [recipes, amountOfPages, isLoading]);

  return (
    <RecipesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
