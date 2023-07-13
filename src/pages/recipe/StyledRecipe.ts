import styled from 'styled-components';
import { colors, rootPageContainer } from '~/utils/_mixins';

const StyledRecipe = styled.section`
  ${rootPageContainer};

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-inline: 2rem;

  color: ${colors.secondary};

  img {
    width: 250px;
    aspect-ratio: 1/1;
    object-fit: cover;

    border-radius: 1rem;

    border: 1px solid ${colors.secondary};
  }

  .information {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    padding: 0 0.25rem;
    margin-top: 1.5rem;

    width: 250px;
  }
  & > div:first-of-type {
    background-color: ${colors.primary};
    border-radius: 1rem;
  }
  .instructions {
    display: grid;
    grid-template-columns: 250px;
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
