import {
  ComponentPropsWithoutRef,
  FC,
  MouseEventHandler,
  ReactNode,
} from 'react';

import styles from './button.module.scss'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  variant: 'normal' | 'inverted' | 'alternative';
  type?: 'submit';
  onClick?: MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ children, variant, ...otherProps }) => {
  return <button className={styles[variant]} {...otherProps}>{children}</button>;
};

export default Button;
