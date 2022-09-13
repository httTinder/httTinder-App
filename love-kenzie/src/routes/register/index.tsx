import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { SubTitle } from '../../components/subtitle'
import { Title } from '../../components/title'

import facebook from '../../assets/socials/facebook.svg'
import mail from '../../assets/socials/mail.svg'

import lhamaSheep from '../../assets/animals/lhamaSheep.svg'
import logoDesk from '../../assets/logo/LogoDesk.png'

export const RegisterPage = () => {
	return (
		<>
			<section>
				<img src={logoDesk} />
				<SubTitle>Join us and find your perfect match!</SubTitle>
				<img src={lhamaSheep} alt='' />
			</section>

			<section>
				<div>
					<Title>Create Account</Title>
				</div>

				<div>
					<a>
						<img src={mail} alt='Login with mail' />
					</a>
					<a>
						<img src={facebook} alt='Login with facebook' />
					</a>
				</div>

				<p>or use your email for registration:</p>

				<div>
					<Input placeholder='Name' type='text' />
					<Input placeholder='Email' type='email' />
					<Input placeholder='Password' type='password' />
					<Input placeholder='Confirm Password' type='password' />
					<Input placeholder='Age' type='number' />
				</div>

				<div>
					<Input type='checkbox' />
					<small>
						I agree to the <a>Terms</a>
					</small>
				</div>

				<div>
					<Button type='submit'>Sign Up</Button>
					<Button type='button'>Sign In</Button>
				</div>
			</section>
		</>
	)
}
