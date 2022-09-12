import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

export const Input = ({ label, ...rest }: InputProps) => {
	return (
		<>
			{label && <label>{label}</label>}
			<input {...rest} />
		</>
	)
}
