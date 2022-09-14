import Ghost from '../../assets/animals/loveGhost.png'
import logo from '../../assets/logo/LogoDesk.png'

import { SubTitle } from '../../components/subtitle'
import { Title } from '../../components/title'

import { Container } from '../../styles/container'
import { Section } from '../register/style'
import { BoxWrapper } from './style'

const CheckEmailPage = () => {
	//CRIAR LOGICA
	//=> esperando verificação do usuario
	//=> sucesso token autenticado
	//=> erro problema com token

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
					<Title> Check your email! </Title>
					<p>Oops, didn't get the email?</p>
					{/* {user.email} */}
					<a>Send me another email, please.</a>
				</BoxWrapper>
				<img className='ghost' src={Ghost} alt='' />
			</Section>
		</Container>
	)
}

export default CheckEmailPage
