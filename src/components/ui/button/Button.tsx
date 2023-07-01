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
    background-color: ${colors.main};
    border-color: ${colors.secondary};
  `,
  inverted: () => css`
    color: ${colors.main};
    background-color: ${colors.secondary};
    border-color: ${colors.main};
  `,
  alternative: () => css`
    color: ${colors.details};
    background-color: ${colors.secondary};
    border-color: ${colors.details};
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
  type?: 'submit';
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
