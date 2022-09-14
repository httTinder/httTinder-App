import styled, { css } from 'styled-components'

export const MainWrapper = styled.div`
	background-color: var(--pink);

	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	header {
		text-align: center;
	}
`
interface PropsSection {
	whiteBackground?: boolean
	boxShadow?: boolean
	padding?: boolean
	borderRadius?: number
	minWidth?: number
}

export const Section = styled.section`
	min-width: ${(props: PropsSection) => props.minWidth}px;
	width: 100%;
	box-shadow: var(
		${(props: PropsSection) => props.boxShadow && '--box-shadow'}
	);

	background-color: ${(props: PropsSection) =>
		props.whiteBackground && '#ffff;'};

	${(props: PropsSection) => {
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
	}}

	border-radius: ${(props: PropsSection) => `${props.borderRadius}px`};

	@media (max-width: 768px) {
		.animalImg {
			display: none;
		}
	}
`

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	.socials,
	.sign-buttons,
	.inputs-wrappers {
		display: flex;
		gap: 2rem;
	}
	.socials > a > img {
		border: 5px solid transparent;
		border-radius: 100px;

		transition: ease-in-out 200ms;
	}

	.socials > a > img:hover {
		box-shadow: var(--button-hover-shadow);
		cursor: pointer;
	}
	.text-orientation {
		font-weight: 400;
		font-size: 18px;
		line-height: 26px;
		font-family: 'Secular One', sans-serif;
	}
	.inputs-wrappers {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.terms-checkbox {
		margin: 0 1rem;
		border-radius: 50px;
		cursor: pointer;
	}
`
