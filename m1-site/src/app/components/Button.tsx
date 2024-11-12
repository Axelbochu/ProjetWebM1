import { FC } from "react"

type Props = {
  children: React.ReactNode 
  onClick: () => void
  className?: string 
}
export const Button: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      className={`p-2 m-2 cursor-pointer bg-custom-light rounded-full  ${className}`} 
      onClick={onClick}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </button>
  )
}
