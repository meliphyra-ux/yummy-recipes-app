import { colors } from '~/utils/_mixins';
import { styled } from 'styled-components';

const StyledPaginationButton = styled.button<{ $isPageSelected: boolean }>`
  color: ${(props) => (props.$isPageSelected ? colors.secondary : colors.text)};
  background-color: ${(props) =>
    props.$isPageSelected ? colors.primary : colors.secondary};

  width: 50px;
  height: 50px;

  cursor: pointer;

  font-size: 1.1rem;

  padding: 0.2rem 0.4rem;

  border-radius: 0.25rem;
  border: 1px solid ${colors.secondary};
`;

export default StyledPaginationButton;
