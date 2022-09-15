import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { SubTitle } from '../../components/subtitle'
import { Title } from '../../components/title'

import { Container } from '../../styles/container'
import { Main, MainWrapper, Section } from '../register/style'

import logoDesk from '../../assets/logo/LogoDesk.png'

import fox from '../../assets/animals/foxLove.svg'
import facebook from '../../assets/socials/facebook.svg'
import email from '../../assets/socials/mail.svg'
const LoginPage = () => {
	return (
		<MainWrapper>
			<Container
				padding
				flex
				flexDirection
				containerWidth={1320}
				alignItems={'center'}
				justifyContent={'space-between'}
				gap={2}>
				<Section
					boxShadow
					whiteBackground={true}
					padding
					minWidth={320}
					borderRadius={15}>
					<header>
						<Title>Hello Again!</Title>
					</header>
					<Main>
						<form>
							<div className='socials'>
								<a>
									<img src={email} alt='Login with email' />
								</a>
								<a>
									<img
										src={facebook}
										alt='Login with facebook'
									/>
								</a>
							</div>
							<p>or user yor email to login:</p>
							<div className='inputs-wrappers'>
								<Input placeholder='Email' type='email' />
								<Input placeholder='Password' type='password' />
							</div>
							<a href='#'>Recovery password</a>
							<div className='sign-buttons'>
								<Button selected type='submit'>
									Sign Up
								</Button>
								<Button notSelected type='button'>
									Sign In
								</Button>
							</div>
						</form>
					</Main>
				</Section>
				<Section padding>
					<div className='flex-wrapper'>
						<img src={logoDesk} />
						<SubTitle>Welcome back you’ve been missed!</SubTitle>
						<img className='animalImg' src={fox} alt='' />
					</div>
				</Section>
			</Container>
		</MainWrapper>
	)
}
export default LoginPage
