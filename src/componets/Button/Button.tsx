import type { ReactNode } from 'react';
import './Button.css';

type ButtonVariant = 'solid' | 'outline' | 'link';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

const Button = ({ children, variant = 'solid', href, onClick, icon }: ButtonProps) => {
  const className = `btn btn--${variant}`;

  if (href) {
    return (
      <a className={className} href={href} onClick={onClick}>
        {children}
        {icon && <span className="btn__icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type="button">
      {children}
      {icon && <span className="btn__icon">{icon}</span>}
    </button>
  );
};

export default Button;