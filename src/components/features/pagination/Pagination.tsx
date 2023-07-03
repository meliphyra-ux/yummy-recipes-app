import { useContext } from 'react';
import { RecipesContext } from '~/contexts/RecipesContext';

import PaginationButton from '../pagination-button/Pagination-button';
import styled from 'styled-components';

import { colors } from '~/utils/_mixins';

const StyledPaginationContainer = styled.div`
  border-radius: 0.25rem;
  background-color: ${colors.secondary};

  width: fit-content;
  height: fit-content;
`;

const amountOfDisplayedPaginationButtons = 5;

const measureBoundOfPagination = (
  currentPage: number,
  amountOfPages: number
) => {
  const minPagePositionToMove = 3
  // If currentPage is 3 pages from the start or from the end
  if (currentPage >= minPagePositionToMove && amountOfPages - currentPage >= minPagePositionToMove) {
    return [currentPage - 3, currentPage + 2];
  } 
  // If page positioned at the start
  else if (currentPage < 3) {
    return [0, amountOfDisplayedPaginationButtons];
  }
  // If page positioned at the end
  else{
    return [amountOfPages - currentPage, amountOfPages];
  }
};

const paginationButtons = (amountOfPages: number, currentPage: number) => Array.from(
  { length: amountOfPages - 1 },
  (_, index) => index + 1
)
  .slice(...measureBoundOfPagination(currentPage, amountOfPages))
  .map((page) => (
    <PaginationButton
      key={page}
      page={page}
      $isPageSelected={currentPage === page}
    />
  ));

const Pagination = () => {
  const { currentPage, amountOfPages } = useContext(RecipesContext);

  return (
    <StyledPaginationContainer>{paginationButtons(amountOfPages, currentPage)}</StyledPaginationContainer>
  );
};

export default Pagination;
