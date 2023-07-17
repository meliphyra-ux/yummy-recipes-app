import styled from 'styled-components';
import { colors, rootPageContainer } from '~/utils/_mixins';

const StyledContacts = styled.section`
  ${rootPageContainer};

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem 0;

  color: ${colors.secondary};

  a {
    color: inherit;
    text-decoration: underline;
  }
`;

export default StyledContacts;
