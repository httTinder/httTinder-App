import styled, { css } from 'styled-components'

interface IButton {
	selected?: boolean
	notSelected?: boolean
}

export const ButtonStyle = styled.button`
	border-radius: 10px;
	padding: 0.8rem 4rem;
	border: 3px solid var(--red);

	transition: ease-in-out 200ms;

	${(props: IButton) => {
		if (props.selected) {
			return css`
				color: var(--white);
				background-color: var(--red);
			`
		}
	}};

	${(props: IButton) => {
		if (props.notSelected) {
			return css`
				color: var(--red);

				background-color: var(--white);
			`
		}
	}};

	&:hover {
		border: 3px solid transparent;
		box-shadow: var(--button-hover-shadow);
	}
`
