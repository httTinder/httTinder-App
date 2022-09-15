import { useContext, useEffect } from 'react'
import { AuthContext } from '../../providers/Auth'

import unicornPcError from '../../assets/animals/unicornPcError.png'
import UnicorPcChill from '../../assets/animals/UnicorPcChill.png'
import logo from '../../assets/logo/LogoDesk.png'

import { SubTitle } from '../../components/subtitle'
import { Title } from '../../components/title'

import { Container } from '../../styles/container'
import { Section } from '../register/style' 
import { BoxWrapper } from './style'
import { Button } from '../../components/button'
import { useParams } from 'react-router-dom'

const EmailChecker = () => {
	//CRIAR LOGICA
	//=> esperando verificação do usuario
	//=> sucesso token autenticado
	//=> erro problema com token
	const { tokenEmail } : any = useParams()

	const { validateEmail, message } = useContext(AuthContext);

	const plus = {
		title : " Your email has been verified! ",
		error : null,
		resend : null,
		image : UnicorPcChill
	}

	const error = {
		title : " We were unable to validate your email! ",
		error : "Oops, didn't get the email?",
		resend : "Send me another email, please.",
		image : unicornPcError
	}

	useEffect(() => {
		if (message === "") {

			validateEmail(tokenEmail)
		}

	}, [])


	return (
		<Container
			flex
			padding
			containerWidth={1320}
			justifyContent={'center'}
			alignItems={'center'}
			gap={2}
			flexDirectionNormal={'column'}>
			<div>
				<img src={logo} alt='Kenzie love' />
				<SubTitle>You&apos;re almost there!</SubTitle>
			</div>
			<Section whiteBackground boxShadow padding borderRadius={10}>
				<BoxWrapper>
					<Title> {(message === "" || message === "Error") ? error.title : plus.title }</Title>
					<p>{(message === "" || message === "Error") ? error.error : plus.error }</p>
					{/* {user.email} */}
					<a>{(message === "" || message === "Error") ? error.resend : plus.resend }</a>
				<img className='ghost' src={(message === "" || message === "Error") ? error.image : plus.image} alt='' />
				
					{(message === "" || message === "Error") 
						? null 
						: (
							<Button selected type='submit' >
								Go to Login
							</Button>
							)
					}
				</BoxWrapper>
			</Section>
		</Container>
	)
}

export default EmailChecker
