import { useContext } from 'react';

import { changeCurrentPage } from '~/contexts/actions/recipesActions';

import { RecipesContext } from '~/contexts/RecipesContext';

import PaginationButton from '../pagination-button/Pagination-button';
import Button from '~/components/ui/button/Button';
import StyledPaginationContainer from './StyledPaginationContainer';


const amountOfDisplayedPaginationButtons = 5;

const measureBoundOfPagination = (
  currentPage: number,
  amountOfPages: number
) => {
  const minPagePositionToMove = 3;
  // If currentPage is 3 pages from the start or from the end
  if (
    currentPage >= minPagePositionToMove &&
    amountOfPages - currentPage >= minPagePositionToMove
  ) {
    return [currentPage - 3, currentPage + 2];
  }
  // If page positioned at the start
  else if (currentPage < minPagePositionToMove) {
    return [0, amountOfDisplayedPaginationButtons];
  }
  // If page positioned at the end
  else {
    return [amountOfPages - currentPage, amountOfPages];
  }
};

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
    if(nextPage < amountOfPages)
      dispatch(changeCurrentPage(nextPage));
  };

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1;
    if(previousPage > 0)
      dispatch(changeCurrentPage(previousPage))
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
