import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { SubTitle } from '../../components/subtitle'
import { Title } from '../../components/title'

import facebook from '../../assets/socials/facebook.svg'
import mail from '../../assets/socials/mail.svg'

import lhamaSheep from '../../assets/animals/lhamaSheep.svg'
import logoDesk from '../../assets/logo/LogoDesk.png'

import { Container } from '../../styles/container'
import { Main, MainWrapper, Section } from './style'

export const RegisterPage = () => {
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
						<Title>Create Account</Title>
					</header>
					<Main>
						<div className='socials'>
							<a>
								<img src={mail} alt='Login with mail' />
							</a>
							<a>
								<img src={facebook} alt='Login with facebook' />
							</a>
						</div>

						<p>or use your email for registration:</p>

						<div className='inputs-wrappers'>
							<Input placeholder='Name' type='text' />
							<Input placeholder='Email' type='email' />
							<Input placeholder='Password' type='password' />
							<Input
								placeholder='Confirm Password'
								type='password'
							/>
							<Input placeholder='Age' type='number' />
						</div>

						<div>
							<Input type='checkbox' />
							<small>
								I agree to the <a>Terms</a>
							</small>
						</div>

						<div className='sign-buttons'>
							<Button type='submit'>Sign Up</Button>
							<Button type='button'>Sign In</Button>
						</div>
					</Main>
				</Section>

				<Section padding>
					<img src={logoDesk} />
					<SubTitle>Join us and find your perfect match!</SubTitle>
					<img className='animalImg' src={lhamaSheep} alt='' />
				</Section>
			</Container>
		</MainWrapper>
	)
}
