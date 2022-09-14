import styled from 'styled-components'

export const InputStyle = styled.input`
	padding: 0.5rem 1rem;

	border-radius: 10px;
	border: 3px solid var(--red);

	background-color: var(--white);

	&::-webkit-input-placeholder {
		color: var(--red);
	}
`
