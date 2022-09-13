import { ReactNode } from 'react'

interface SubTitleProps {
	children: ReactNode
}

export const SubTitle = ({ children }: SubTitleProps) => {
	return <h2> {children} </h2>
}
