import { ReactNode } from 'react';

type Color = keyof typeof buttonTheme.color;
type Size = keyof typeof buttonTheme.size;
type Type = 'button' | 'submit';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  color?: Color;
  size?: Size;
  type?: Type;
}

export function Button({ children, onClick, color = 'default', type = 'button', size = 'sm' }: ButtonProps) {
  return (
    <button
      className={`${buttonTheme.color[color]} ${buttonTheme.size[size]} text-center rounded-md border`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const buttonTheme = {
  color: {
    default: 'bg-white-400 border-gray-300 hover:bg-gray-100',
    blue: 'text-white bg-blue-400 border-blue-400 hover:bg-blue-300 hover:border-blue-300',
  },

  size: {
    sm: 'px-2 py-0.5 text-sm',
    md: 'px-3 py-2 text-base',
    full: 'py-3 w-full text-base',
  },
};
