import styled from 'styled-components';
import { colors } from '~/utils/_mixins';

const StyledInstruction = styled.div`
  max-width: 300px;
  height: max-content;

  padding: 0.5rem;

  border-radius: 1rem;

  background-color: ${colors.primary};
`;

export default StyledInstruction;
