import { Input } from '../../components/input'
import { Title } from '../../components/title'

export const RegisterPage = () => {
	return (
		<section>
			<div>
				<Title text='Create Account' />
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
