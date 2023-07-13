import { useContext } from 'react';

import { changeCurrentPage } from '~/contexts/actions/recipesActions';
import { measureBoundOfPagination } from '~/utils/helperFunctions';

import { RecipesContext } from '~/contexts/RecipesContext';

import PaginationButton from '../PaginationButton/PaginationButton';
import Button from '~/components/ui/Button/Button';
import StyledPaginationContainer from './StyledPaginationContainer';

const paginationButtons = (amountOfPages: number, currentPage: number) =>
  Array.from({ length: amountOfPages - 1 }, (_, index) => index + 1)
    .slice(...measureBoundOfPagination(currentPage, amountOfPages))
    .map((page) => (
      <PaginationButton
        key={page}
        page={page}
        $isPageSelected={currentPage === page}
      />
    ));

const Pagination = () => {
  const { currentPage, amountOfPages, dispatch } = useContext(RecipesContext);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage < amountOfPages) dispatch(changeCurrentPage(nextPage));
  };

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage > 0) dispatch(changeCurrentPage(previousPage));
  };
  return (
    <StyledPaginationContainer>
      <Button $style="inverted" onClick={handlePreviousPage}>
        &lt;
      </Button>
      {paginationButtons(amountOfPages, currentPage)}
      <Button $style="inverted" onClick={handleNextPage}>
        &gt;
      </Button>
    </StyledPaginationContainer>
  );
};

export default Pagination;
