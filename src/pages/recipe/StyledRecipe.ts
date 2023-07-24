import styled from 'styled-components';
import { colors, rootPageContainer } from '~/utils/_mixins';

const StyledRecipe = styled.section`
  ${rootPageContainer};

  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: ${colors.secondary};

  & > div:first-of-type {
    background-color: ${colors.primary};
    border-radius: 1rem;
  }
  .instructions {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    & > div {
      max-width: 300px;
      height: max-content;

      padding: 0.5rem;

      border-radius: 1rem;

      background-color: ${colors.primary};
    }
  }
`;

export default StyledRecipe;
