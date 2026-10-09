import { Link, type LinkProps } from 'react-router-dom'

import { buttonClasses, type ButtonSize, type ButtonVariant } from './buttonStyles'

interface ButtonLinkProps extends LinkProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

/** A router Link styled exactly like a Button (avoids nesting <button> in <a>). */
export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, size, className)} {...props} />
}
