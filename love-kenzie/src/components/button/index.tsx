import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

export const Button = ({ text, ...rest }: ButtonProps) => {
	return <button {...rest}>{text}</button>
}
