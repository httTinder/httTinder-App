import styled, { css } from 'styled-components'

export const MainWrapper = styled.div`
	background-color: var(--pink);

	width: 100%;
	height: 100%;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`
interface PropsSection {
	whiteBackground?: boolean
	boxShadow?: boolean
	padding?: number
	borderRadius?: number
}

export const Section = styled.section`
	max-width: 50%;
	width: 100%;
	${(props: PropsSection) => {
		if (props.boxShadow) {
			return css`
				box-shadow: var(--box-shadow);
			`
		} else if (props.whiteBackground) {
			return css`
				background-color: var(--white);
			`
		} else if (props.padding) {
			return css`
				padding: ${props.padding}rem;
			`
		} else if (props.borderRadius) {
			return css`
				border-radius: ${props.borderRadius}px;
			`
		}
	}};
`

export const Main = styled.main``
