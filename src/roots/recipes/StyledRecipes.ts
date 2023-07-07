import styled from 'styled-components';
import { rootPageContainer } from '~/utils/_mixins';

export const StyledRecipesContainer = styled.section`
  ${rootPageContainer}
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
