import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'

const buttomVariants = cva(
  'inline-flex items-center justify-center text-white px-3 py-3 duration-200 font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 hover:bg-blue-600',
        secondary: 'bg-gray-500 hover:bg-gray-600',
        danger: 'bg-red-500 hover:bg-red-600',
        warning: 'bg-yellow-500 hover:bg-yellow-600',
        success: 'bg-green-500 hover:bg-green-600',
      },
      sizes: {
        sm: 'text-sm px-2 py-2 h-8',
        base: 'text-base px-3 py-3 h-10',
        lg: 'text-lg px-4 py-4 h-12',
      },
      fullWidth: {
        true: 'w-full',
      },
      rounded: {
        true: 'rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      sizes: 'base',
      rounded: false,
    },
  }
)

interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttomVariants> {
  children: ReactNode
}

const Button = ({
  children,
  className,
  variant,
  sizes,
  fullWidth,
  rounded,
  ...rest
}: IProps) => {
  return (
    <button
      className={`${buttomVariants({
        variant,
        sizes,
        fullWidth,
        rounded,
      })} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
