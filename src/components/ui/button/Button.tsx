import {
  ComponentPropsWithoutRef,
  FC,
  MouseEventHandler,
  ReactNode,
} from 'react';

import styled, { css } from 'styled-components';
import { colors } from '~/utils/_mixins';

const buttonStyles = {
  normal: () => css`
    color: ${colors.secondary};
    background-color: ${colors.primary};
    border-color: ${colors.secondary};
  `,
  inverted: () => css`
    color: ${colors.secondary};
    background-color: ${colors.primary};
    border-color: ${colors.secondary};
  `,
  alternative: () => css`
    color: ${colors.accent};
    background-color: ${colors.secondary};
    border-color: ${colors.primary};
  `,
};

const StyledButton = styled.button<{ $style: keyof typeof buttonStyles }>`
  ${(props) => buttonStyles[props.$style]};

  padding: 0.5rem 0.75rem;
  
  border-width: 1px;
  border-style: solid;

  font-size: 1.1rem;
  font-weight: 600;

  cursor: pointer;
`;

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  $style: keyof typeof buttonStyles;
  onClick?: MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ children, $style, ...otherProps }) => {
  return (
    <StyledButton $style={$style} {...otherProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
