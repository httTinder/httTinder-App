import styled, { css } from 'styled-components'

interface IContainer {
	padding?: boolean
	flex?: boolean
	flexDirection?: boolean
	justifyContent?: string
	alignItems?: string
	gap?: number
	containerWidth?: number
}

export const Container = styled.div`
	display: ${(props: IContainer) => props.flex && 'flex'};
	justify-content: ${(props: IContainer) =>
		props.justifyContent && props.justifyContent};
	align-items: ${(props: IContainer) => props.alignItems && props.alignItems};
	gap: ${(props: IContainer) => props.gap && `${props.gap}rem`};

	${(props: IContainer) => {
		if (props.flexDirection) {
			return css`
				@media (min-width: 320px) {
					flex-direction: column-reverse;
				}
				@media (min-width: 768px) {
					flex-direction: row;
				}
			`
		}
	}};

	background-color: aqua;
	margin: 0 auto;
	max-width: ${(props) => props.containerWidth}px;
	width: 100%;
	${(props: IContainer) => {
		if (props.padding) {
			return css`
				@media (min-width: 320px) {
					padding: 1rem;
				}
				@media (min-width: 520px) {
					padding: 2rem;
				}
				@media (min-width: 928px) {
					padding: 3rem;
				}
			`
		}
	}};
`
