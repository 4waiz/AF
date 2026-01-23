import type { ButtonHTMLAttributes } from "react"

const baseStyles =
  "btn-sweep inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-ring"

const variants = {
  primary:
    "bg-gradient-to-r from-apple-red via-apple-red to-apple-blush text-white shadow-soft hover:-translate-y-0.5",
  secondary:
    "bg-white text-apple-red border border-apple-red/30 shadow-sm hover:-translate-y-0.5",
  ghost: "bg-transparent text-apple-red hover:bg-apple-red/10",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
}

export const buttonStyles = (variant: keyof typeof variants = "primary") =>
  `${baseStyles} ${variants[variant]}`

const Button = ({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button className={`${buttonStyles(variant)} ${className}`} type={type} {...props} />
  )
}

export default Button
