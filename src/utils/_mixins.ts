import { css } from 'styled-components';

export const colors = {
  main: '#EFF1F3',
  secondary: '#201E1D',
  details: '#272727',
};

export const popAnimation = css`
  animation-name: opacity, size;
  animation-duration: 0.25s;
  animation-fill-mode: forwards;
`;

export const spinAnimation = css`
  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`;
