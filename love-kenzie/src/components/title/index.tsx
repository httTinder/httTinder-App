import { ReactNode } from 'react'
import { TitleStyle } from './style'

interface TitleProps {
	children: ReactNode
}

export const Title = ({ children }: TitleProps) => {
	return <TitleStyle> {children} </TitleStyle>
}
