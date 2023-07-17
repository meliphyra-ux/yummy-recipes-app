import styled from 'styled-components';
import { colors, textShadow } from '~/utils/_mixins';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${colors.primary};

  margin-top: 20px;

  height: 44px;

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    ${textShadow(colors.accent)}
  }
`;

export default StyledHeader;
