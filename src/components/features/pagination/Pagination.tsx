import { useContext } from 'react';
import PaginationButton from '../pagination-button/Pagination-button';

import styled from 'styled-components';
import { colors } from '~/utils/_mixins';
import { RecipesContext } from '~/contexts/RecipesContext';

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
  if (currentPage >= 3 && amountOfPages - currentPage >= 3) {
    return [currentPage - 3, currentPage + 2];
  } else if (currentPage < 3) {
    return [0, amountOfDisplayedPaginationButtons];
  } else{
    return [amountOfPages - currentPage, amountOfPages];
  }
};

const Pagination = () => {
  const { currentPage, amountOfPages } = useContext(RecipesContext);

  const paginationButtons = Array.from(
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

  return (
    <StyledPaginationContainer>{paginationButtons}</StyledPaginationContainer>
  );
};

export default Pagination;
