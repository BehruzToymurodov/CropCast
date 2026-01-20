import { ArrowLeft, DollarSign, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoUrl from '../../assets/LOGO_Itself_1x1.png'
import LanguageSwitcher from './LanguageSwitcher'

const Header = ({
	language,
	setLanguage,
	showBackToHome,
	onBackToHome,
	t,
	currency,
	setCurrency,
	currentUser,
	profilePath = '/profile',
}) => {
	return (
		<header className='bg-green-700 text-white shadow-lg'>
			<div className='w-full px-4 py-4 md:py-6'>
				<div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
					{/* Logo and Title */}
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-3'>
							<div className='bg-white rounded-full p-2 shadow-sm'>
								<img
									src={logoUrl}
									alt='Hosildor Logo'
									className='w-16 h-16 object-contain'
								/>
							</div>
							<div>
								<h1 className='text-xl md:text-3xl font-bold'>{t.title}</h1>
								<p className='text-green-100 text-xs md:text-sm'>
									{t.subtitle}
								</p>
							</div>
						</div>
					</div>

					{/* Controls */}
					<div className='flex flex-wrap items-center gap-2 md:gap-4 w-full md:w-auto'>
						{showBackToHome && (
							<button
								onClick={onBackToHome}
								className='flex items-center gap-2 bg-green-600 hover:bg-green-500 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base'
							>
								<ArrowLeft className='w-4 h-4' />
								<span className='hidden sm:inline'>{t.backToHome}</span>
								<span className='sm:hidden'>Home</span>
							</button>
						)}

						<div className='flex items-center gap-2 md:gap-4'>
							{/* Currency Selector */}
							<div className='flex items-center gap-2 bg-green-600 rounded-lg px-2 py-2 md:px-3'>
								<DollarSign className='w-4 h-4' />
								<select
									value={currency}
									onChange={e => setCurrency(e.target.value)}
									className='bg-transparent text-white text-sm md:text-base font-semibold outline-none cursor-pointer'
								>
									<option value='USD' className='text-gray-800'>
										USD
									</option>
									<option value='UZS' className='text-gray-800'>
										UZS
									</option>
									<option value='RUB' className='text-gray-800'>
										RUB
									</option>
									<option value='EUR' className='text-gray-800'>
										EUR
									</option>
								</select>
							</div>

							{/* Language Switcher */}
							<LanguageSwitcher language={language} setLanguage={setLanguage} />
						</div>

						{/* User Info */}
						{currentUser && (
							<Link
								to={profilePath}
								className='ml-auto flex items-center gap-2 bg-green-600 rounded-full px-2 py-1.5 hover:bg-green-500 transition-colors'
							>
								<div className='w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center overflow-hidden'>
									{currentUser.avatar ? (
										<img
											src={currentUser.avatar}
											alt={currentUser.username}
											className='w-full h-full object-cover'
										/>
									) : (
										<User className='w-4 h-4' />
									)}
								</div>
								<span className='text-sm font-semibold hidden sm:inline'>
									{currentUser.username}
								</span>
							</Link>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
