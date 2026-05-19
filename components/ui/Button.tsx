'use client';

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2.5',
    'font-body font-semibold tracking-wide',
    'transition-all duration-300 ease-out rounded-full',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark',
    'disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]',
    'select-none cursor-pointer',
  ],
  {
    variants: {
      variant: {
        primary:  ['bg-brand-blue text-white', 'hover:bg-brand-blue-light hover:shadow-blue', 'shadow-blue/50'],
        outline:  ['bg-transparent text-brand-blue border-2 border-brand-blue/40', 'hover:border-brand-blue hover:bg-brand-blue-dim'],
        ghost:    ['bg-transparent text-gray-300', 'hover:text-white hover:bg-white/5'],
        white:    ['bg-white text-brand-dark', 'hover:bg-gray-100 shadow-dark'],
      },
      size: {
        sm:  'h-9 px-5 text-sm',
        md:  'h-11 px-7 text-sm',
        lg:  'h-13 px-8 text-[15px]',
        xl:  'h-14 px-10 text-base',
        '2xl': 'h-16 px-12 text-lg',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?:  React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  )
);
Button.displayName = 'Button';
export { buttonVariants };
