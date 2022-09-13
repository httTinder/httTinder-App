import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonStyle } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	selected?: boolean
	notSelected?: boolean
}

export const Button = ({
	selected,
	notSelected,
	children,
	...rest
}: ButtonProps) => {
	return (
		<>
			{selected ? (
				<ButtonStyle selected {...rest}>
					{children}
				</ButtonStyle>
			) : (
				<ButtonStyle notSelected {...rest}>
					{children}
				</ButtonStyle>
			)}
		</>
	)
}
