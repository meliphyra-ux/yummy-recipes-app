import { FC } from 'react';
import PaginationButton from '../pagination-button/Pagination-button';
import styled from 'styled-components';
import { colors } from '~/utils/_mixins';

type PaginationProps = {
  amountOfPages: number;
  currentPage: number;
};

const StyledPaginationContainer = styled.div`
  border-radius: 0.25rem;
  background-color: ${colors.secondary};

  width: fit-content;
  height: fit-content;
`;

const Pagination: FC<PaginationProps> = ({ amountOfPages, currentPage }) => {
  const paginationButtons = Array(amountOfPages)
    .fill(0)
    .map((_, page) => (
      <PaginationButton
        key={page + 1}
        page={page + 1}
        $isPageSelected={currentPage === page + 1}
      />
    ));

  return (
    <StyledPaginationContainer>{paginationButtons}</StyledPaginationContainer>
  );
};

export default Pagination;
