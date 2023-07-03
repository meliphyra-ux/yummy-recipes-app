import { useContext } from 'react';

import { RecipesContext } from '~/contexts/RecipesContext';

import { changeCurrentPage } from '~/contexts/actions/recipesActions';

import { colors } from '~/utils/_mixins';
import { styled } from 'styled-components';
import React from 'react';

const StyledPaginationButton = styled.button<{ $isPageSelected: boolean }>`
  color: ${(props) => (props.$isPageSelected ? colors.secondary : colors.main)};
  background-color: ${(props) =>
    props.$isPageSelected ? colors.main : colors.secondary};

  width: 50px;
  height: 50px;

  cursor: pointer;

  font-size: 1.25rem;
  
  padding: 0.2rem 0.4rem;

  border: none;
  border-radius: 0.25rem;
`;

const PaginationButton = ({
  page,
  $isPageSelected,
}: {
  page: number;
  $isPageSelected: boolean;
}) => {
  const { dispatch } = useContext(RecipesContext);
  
  const handleOnClick = () => {
    dispatch(changeCurrentPage(page))
  }
  return (
    <StyledPaginationButton $isPageSelected={$isPageSelected} onClick={handleOnClick}>
      {page}
    </StyledPaginationButton>
  );
};

export default PaginationButton;
