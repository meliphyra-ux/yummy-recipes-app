import { styled } from 'styled-components';

import { colors, popAnimation } from '~/utils/_mixins';

import { StyledImageCircleProps } from './ImageCircle';

const StyledImageCircle = styled.img<StyledImageCircleProps>`
  ${popAnimation}
  width: ${(props) => props.$size};
  aspect-ratio: 1/1;

  opacity: 0;

  position: absolute;
  top: ${(props) => props.$top ?? ' '};
  bottom: ${(props) => props.$bottom ?? ' '};
  left: ${(props) => props.$left ?? ' '};
  right: ${(props) => props.$right ?? ' '};

  filter: drop-shadow(
    0 0 0.5rem ${(props) => props.$dropShadow ?? colors.secondary}
  );
  background-color: ${(props) => props.$backgroundColor ?? '#fff'};
  border-radius: 50%;

  animation-delay: ${(props) => props.$animationDelay ?? '200'}s;

  transform: rotateZ(${(props) => props.$rotate ?? 0}deg) !important;
`;

export default StyledImageCircle;
