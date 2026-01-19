import { AlertCircle, Lock, LogIn, Mail, User } from 'lucide-react'
import { useState } from 'react'
import LanguageSwitcher from '../common/LanguageSwitcher'

const LoginPage = ({
	onLogin,
	onGoogleAuth,
	onSwitchToRegister,
	language,
	setLanguage,
	t,
}) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [showGooglePrompt, setShowGooglePrompt] = useState(false)
	const [googleEmail, setGoogleEmail] = useState('')
	const [googleError, setGoogleError] = useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		setError('')

		if (!username.trim() || !password.trim()) {
			setError(t.fillAllFields)
			return
		}

		setLoading(true)

		// Simulate login (replace with real API call)
		setTimeout(() => {
			const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
			const user = storedUsers.find(
				u => u.username === username && u.password === password,
			)

			if (user) {
				localStorage.setItem('currentUser', JSON.stringify(user))
				onLogin(user)
			} else {
				setError(t.invalidCredentials)
			}
			setLoading(false)
		}, 1000)
	}

	const upsertGoogleUser = email => {
		const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
		const existingUser = storedUsers.find(
			u => u.email === email && u.provider === 'google',
		)
		const usernameFromEmail = email.split('@')[0]
		const user =
			existingUser ||
			{
				id: Date.now().toString(),
				username: usernameFromEmail,
				email,
				provider: 'google',
				createdAt: new Date().toISOString(),
			}

		if (!existingUser) {
			storedUsers.push(user)
			localStorage.setItem('users', JSON.stringify(storedUsers))
		}

		localStorage.setItem('currentUser', JSON.stringify(user))
		return user
	}

	const handleGoogleContinue = () => {
		const email = googleEmail.trim().toLowerCase()
		const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

		if (!isValidEmail) {
			setGoogleError(t.invalidEmail)
			return
		}

		const user = upsertGoogleUser(email)
		setShowGooglePrompt(false)
		setGoogleEmail('')
		setGoogleError('')
		onGoogleAuth(user)
	}

	return (
		<div className='auth-page min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center px-4 py-10 relative overflow-hidden'>
			<div className='absolute -top-24 -left-24 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-60'></div>
			<div className='absolute -bottom-32 -right-16 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-60'></div>

			<div className='relative w-full max-w-5xl grid lg:grid-cols-[1.1fr_0.9fr] gap-6'>
				<div className='auth-card bg-gradient-to-br from-green-700 via-emerald-700 to-teal-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl flex flex-col justify-between'>
					<div>
						<div className='text-5xl md:text-6xl animate-float'>🌾</div>
						<h1 className='font-hero text-3xl md:text-4xl mt-6 animate-fade-up'>
							<span className='animate-glow'>{t.welcomeToCropCast}</span>
						</h1>
						<p className='mt-4 text-base md:text-lg text-emerald-100'>
							{t.welcomeToCropCastDesc}
						</p>
					</div>
					<div className='mt-10 space-y-3 text-sm md:text-base text-emerald-100'>
						<p>• {t.searchDirect}</p>
						<p>• {t.browseCategories}</p>
						<p>• {t.technicalMap}</p>
					</div>
				</div>

				<div className='auth-card bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-6 md:p-8'>
					<div className='flex items-center justify-end mb-4'>
						<LanguageSwitcher language={language} setLanguage={setLanguage} />
					</div>
					<div className='text-center mb-6'>
						<h2 className='font-hero text-2xl md:text-3xl text-gray-900'>
							{t.login}
						</h2>
						<p className='text-gray-500 mt-2 text-sm md:text-base'>
							{t.welcomeBack}
						</p>
					</div>

					{error && (
						<div className='mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2'>
							<AlertCircle className='w-5 h-5' />
							<span className='text-sm'>{error}</span>
						</div>
					)}

					<button
						onClick={() => {
							setShowGooglePrompt(true)
							setGoogleEmail('')
							setGoogleError('')
						}}
						className='w-full bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 mb-5'
					>
						<svg className='w-5 h-5' viewBox='0 0 24 24'>
							<path
								fill='#4285F4'
								d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
							/>
							<path
								fill='#34A853'
								d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
							/>
							<path
								fill='#FBBC05'
								d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
							/>
							<path
								fill='#EA4335'
								d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
							/>
						</svg>
						{t.loginWithGoogle}
					</button>

					<div className='my-6 flex items-center gap-4'>
						<div className='flex-1 h-px bg-gray-200'></div>
						<span className='text-gray-400 text-xs uppercase tracking-widest'>
							{t.or}
						</span>
						<div className='flex-1 h-px bg-gray-200'></div>
					</div>

					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='flex flex-col sm:flex-row sm:items-center gap-3'>
							<label className='block text-sm font-semibold text-gray-700 sm:w-28 sm:text-right'>
								{t.username}
							</label>
							<div className='relative flex-1'>
								<User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
								<input
									type='text'
									value={username}
									onChange={e => setUsername(e.target.value)}
									placeholder={t.enterUsername}
									className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none bg-white'
								/>
							</div>
						</div>

						<div className='flex flex-col sm:flex-row sm:items-center gap-3'>
							<label className='block text-sm font-semibold text-gray-700 sm:w-28 sm:text-right'>
								{t.password}
							</label>
							<div className='relative flex-1'>
								<Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
								<input
									type='password'
									value={password}
									onChange={e => setPassword(e.target.value)}
									placeholder={t.enterPassword}
									className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none bg-white'
								/>
							</div>
						</div>

						<button
							type='submit'
							disabled={loading}
							className='w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors disabled:bg-gray-400 flex items-center justify-center gap-2'
						>
							<LogIn className='w-5 h-5' />
							{loading ? t.loggingIn : t.login}
						</button>
					</form>

					<div className='text-center mt-6'>
						<p className='text-gray-600 text-sm'>
							{t.noAccount}{' '}
							<button
								onClick={onSwitchToRegister}
								className='text-green-600 hover:text-green-700 font-semibold'
							>
								{t.registerNow}
							</button>
						</p>
					</div>
				</div>
			</div>

			{showGooglePrompt && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4'>
					<div className='bg-white rounded-2xl shadow-2xl w-full max-w-md p-6'>
						<h3 className='font-hero text-xl text-gray-900 mb-2'>
							{t.loginWithGoogle}
						</h3>
						<p className='text-sm text-gray-500 mb-4'>
							{t.googleEmail}
						</p>
						<div className='relative'>
							<Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
							<input
								type='email'
								value={googleEmail}
								onChange={e => setGoogleEmail(e.target.value)}
								placeholder={t.googleEmailPlaceholder}
								className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none'
							/>
						</div>
						{googleError && (
							<p className='text-sm text-red-600 mt-2'>{googleError}</p>
						)}
						<div className='mt-6 flex items-center justify-end gap-3'>
							<button
								onClick={() => {
									setShowGooglePrompt(false)
									setGoogleEmail('')
									setGoogleError('')
								}}
								className='px-4 py-2 rounded-lg text-gray-600 hover:text-gray-800'
							>
								{t.googleCancel}
							</button>
							<button
								onClick={handleGoogleContinue}
								className='px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700'
							>
								{t.googleContinue}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default LoginPage
