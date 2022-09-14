import { ReactNode } from 'react'
import { SubtitleStyle } from './style'

interface SubTitleProps {
	children: ReactNode
}

export const SubTitle = ({ children }: SubTitleProps) => {
	return <SubtitleStyle> {children} </SubtitleStyle>
}
