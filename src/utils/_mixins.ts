import { css } from 'styled-components';

export const colors = {
  text: '#050505',
  background: '#EBEBEA',
  primary: '#3d3d3d',
  secondary: '#e2e2df',
  accent: '#1d1d20',
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

export const rootPageContainer = css`
  min-height: calc(100vh - 7rem);
  padding: 3rem 2rem;
  margin: 1.5rem 0;

  --s: 50px; /* control the size */

  --_g: ${colors.accent} 90deg, ${colors.primary} 0;
  background: conic-gradient(from 90deg at 2px 2px, var(--_g)),
    conic-gradient(from 90deg at 1px 1px, var(--_g));
  background-size: var(--s) var(--s), calc(var(--s) / 5) calc(var(--s) / 5);
  background-position: center;

  border: 1px solid ${colors.secondary};
`;

export const textShadow = (color: string) => css`
  text-shadow: 1px 1px 2px ${color};
`;
