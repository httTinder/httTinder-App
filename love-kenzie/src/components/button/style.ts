import styled, { css } from 'styled-components'

interface IButton {
	selected?: boolean
	notSelected?: boolean
}

export const ButtonStyle = styled.button`
	border-radius: 10px;
	border: 3px solid var(--red);
	/* padding: 0.2rem 3rem; */
	height: 40px;
	width: 130px;

	@media (min-width: 425px) {
		width: 160px;
	}
	@media (min-width: 650px) {
		width: 200px;
	}
	@media (min-width: 768px) {
		width: 130px;
	}
	@media (min-width: 928px) {
		width: 170px;
	}

	transition: ease-in-out 200ms;

	${(props: IButton) => {
		if (props.selected) {
			return css`
				color: var(--white);
				background-color: var(--red);

				&:hover {
					border: 5 solid #fff;
					box-shadow: var(--button-hover-shadow);
				}
			`
		}
	}};

	${(props: IButton) => {
		if (props.notSelected) {
			return css`
				color: var(--red);

				background-color: var(--white);
				&:hover {
					border: 3px solid transparent;
					box-shadow: var(--button-hover-shadow);
				}
			`
		}
	}};
`
