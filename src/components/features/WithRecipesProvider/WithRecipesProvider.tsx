import { ReactNode } from 'react';
import RecipesProvider from '~/contexts/RecipesContext';

type WithRecipesProviderProps = {
  page: ReactNode;
};

const WithRecipesProvider = ({ page }: WithRecipesProviderProps) => {
  return <RecipesProvider>{page}</RecipesProvider>;
};

export default WithRecipesProvider;
