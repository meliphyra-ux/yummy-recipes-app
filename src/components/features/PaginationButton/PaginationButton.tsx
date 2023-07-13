import { useContext } from 'react';

import { changeCurrentPage } from '~/contexts/actions/recipesActions';

import { RecipesContext } from '~/contexts/RecipesContext';

import StyledPaginationButton from './StyledPaginationButton';

const PaginationButton = ({
  page,
  $isPageSelected,
}: {
  page: number;
  $isPageSelected: boolean;
}) => {
  const { dispatch } = useContext(RecipesContext);

  const handleOnClick = () => {
    dispatch(changeCurrentPage(page));
  };

  return (
    <StyledPaginationButton
      $isPageSelected={$isPageSelected}
      onClick={handleOnClick}
    >
      {page}
    </StyledPaginationButton>
  );
};

export default PaginationButton;
