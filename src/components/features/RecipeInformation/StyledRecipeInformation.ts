import styled from 'styled-components';
import { colors } from '~/utils/_mixins';

const StyledRecipeInformation = styled.div`
  max-height: 600px;

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
`;

export default StyledRecipeInformation;
