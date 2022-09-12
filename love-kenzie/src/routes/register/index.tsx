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
				<Input placeholder='Name' />
				<Input placeholder='Email' />
				<Input placeholder='Password' />
				<Input placeholder='Confirm Password' />
			</div>
		</section>
	)
}
