import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { Title } from '../../components/title'

import facebook from '../../assets/socials/facebook.svg'
import mail from '../../assets/socials/mail.svg'

export const RegisterPage = () => {
	return (
		<section>
			<div>
				<Title text='Create Account' />
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
				<small>I agree to the Terms</small>
			</div>

			<div>
				<Button text='Sign Up' type='submit' />
				<Button text='Sign In' />
			</div>
		</section>
	)
}
