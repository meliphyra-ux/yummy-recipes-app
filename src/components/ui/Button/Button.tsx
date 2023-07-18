import { ComponentPropsWithoutRef, FC } from 'react';
import StyledButton, { buttonStyles } from './StyledButton';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  $style: keyof typeof buttonStyles;
}

const Button: FC<ButtonProps> = ({ children, $style, ...otherProps }) => {
  return (
    <StyledButton $style={$style} {...otherProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
