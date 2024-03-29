import styled from 'styled-components';
import { colors } from '~/utils/_mixins';

const StyledRecipeInformation = styled.div`
  height: fit-content;

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

    padding: 0.5rem;
    margin-top: 1.5rem;

    width: 250px;
  }
`;

export default StyledRecipeInformation;
