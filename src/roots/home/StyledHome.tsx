import { styled } from 'styled-components';
import {
  colors,
  popAnimation,
  rootPageContainer,
  textShadow,
} from '~/utils/_mixins';

export const StyledHomeContainer = styled.section`
  ${rootPageContainer};
  height: calc(100vh - 7rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${colors.secondary};
    ${textShadow(colors.secondary)};

    h1 {
      ${popAnimation};

      text-align: center;
      font-size: 2rem;
    }
    p {
      ${popAnimation};
      animation-delay: 0.25s;

      text-align: center;
      font-size: 1.25rem;

      margin-top: 1rem;

      transform: scale(0);
    }
    button {
      ${popAnimation};
      margin-top: 1.5rem;
      transform: scale(0);
      animation-delay: 0.4s;
    }
  }

  @media screen and (min-width: 971px) {
    flex-direction: row;
    justify-content: space-between;

    padding: 0 5%;

    article {
      width: 25rem;
    }
  }
`;
