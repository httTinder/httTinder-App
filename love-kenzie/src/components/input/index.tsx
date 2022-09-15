import React, { Dispatch, InputHTMLAttributes } from 'react'
import { InputStyle } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

export const Input = ({ label, ...rest }: InputProps) => {
	return (
		<>
			{label && <label>{label}</label>}
			<InputStyle {...rest} />
		</>
	)
}
