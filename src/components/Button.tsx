import type { ReactNode, FC, MouseEvent } from 'react'

type Props = {
  label: string
  onClick?: (e?: MouseEvent<HTMLElement>) => void
  isDisabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button: FC<Props> = ({ label, isDisabled, onClick, type }) => {
  return (
    <button disabled={isDisabled} onClick={onClick} type={type}>
      {label}
    </button>
  )
}

Button.propTypes
