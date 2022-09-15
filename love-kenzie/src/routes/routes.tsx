import { Route, Routes } from 'react-router-dom'
import CheckEmailPage from '../pages/email'
import EmailChecker from '../pages/EmailChecker'
import LoginPage from '../pages/login'
import { RegisterPage } from '../pages/register'

export const PagesRoutes = () => {
	return (
		<Routes>
			<Route path='/registerfinish' element={<CheckEmailPage />} />
			<Route path='/' element={<RegisterPage />} />
			<Route
				path='/emailchecker/:tokenEmail'
				element={<EmailChecker />}
			/>
			<Route path='/login' element={<LoginPage />} />
		</Routes>
	)
}
