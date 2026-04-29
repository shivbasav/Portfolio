import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  const variantClass = styles[variant] || styles.primary;

  return (
    <button className={`${styles.button} ${variantClass} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};
