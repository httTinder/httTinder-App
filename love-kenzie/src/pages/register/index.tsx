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

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//import registerSchema from '../../schemas/register.schema'
import { AuthContext } from '../../providers/Auth'
import { useContext } from 'react'
import { ICreateUser } from '../../interfaces/context.interface'
import * as yup from "yup";

export const RegisterPage = () => {

	const { createUser } = useContext(AuthContext);

	const registerSchema = yup.object().shape({
		name: yup.string().required("Nome obrigatório"),
		email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
		password: yup
		  .string()
		  .required("Senha obrigatório")
		  .min(8, "deve conter 8 digitos")
		  .matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"Senha deve conter 8 caracteres, um maiúsculo, um minúsculo, um número e um especial"
		  ),
		confirmPassword: yup
		  .string()
		  .required("Confirme sua senha!")
		  .oneOf([yup.ref("password")], "Senhas não correspondem")
		  .required("Confirmação de email é obrigatória"),
		age: yup
		  .number()
		  .min(18, "A idade minima é 18 anos")
		  .required("Idade é obrigatória"),
	  });

	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm<ICreateUser>({ resolver: yupResolver(registerSchema) });

	  

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
						<form onSubmit={handleSubmit(createUser)}> 
						<div className='socials'>
							<a>
								<img src={mail} alt='Login with mail' />
							</a>
							<a>
								<img src={facebook} alt='Login with facebook' />
							</a>
						</div>

						<p className='text-orientation'>
							or use your email for registration:
						</p>

						<div className='inputs-wrappers'>
							<Input placeholder='Name' type='text' />
							<Input placeholder='Email' type='email'/>
							<Input placeholder='Password' type='password' />
							<Input
								placeholder='Confirm Password'
								type='password'
								/>
							<Input placeholder='Age' type='number' />
						</div>

						<div>
							<label className='terms'>
								<Input
									className='terms-checkbox'
									type='checkbox'
								/>
								Agree to the <a>Terms</a>
							</label>
						</div>

						<div className='sign-buttons'>
							<Button selected type='submit' >
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
						<SubTitle>
							Join us and find your perfect match!
						</SubTitle>
						<img className='animalImg' src={lhamaSheep} alt='' />
					</div>
				</Section>
			</Container>
		</MainWrapper>
	)
}
