import { ArrowLeft, DollarSign } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

const Header = ({
	language,
	setLanguage,
	view,
	onBackToHome,
	t,
	currency,
	setCurrency,
}) => {
	const logoUrl = '/logo.png'

	return (
		<header className='bg-green-700 text-white shadow-lg'>
			<div className='max-w-7xl mx-auto px-4 py-4 md:py-6'>
				<div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
					{/* Logo and Title */}
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-3'>
							<img
								src={logoUrl}
								alt='CropCast Logo'
								className='w-10 h-10 md:w-12 md:h-12 object-contain'
							/>
							<div>
								<h1 className='text-xl md:text-3xl font-bold'>{t.title}</h1>
								<p className='text-green-100 text-xs md:text-sm'>
									{t.subtitle}
								</p>
							</div>
						</div>
					</div>

					{/* Controls */}
					<div className='flex flex-wrap items-center gap-2 md:gap-4'>
						{view !== 'home' && (
							<button
								onClick={onBackToHome}
								className='flex items-center gap-2 bg-green-600 hover:bg-green-500 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base'
							>
								<ArrowLeft className='w-4 h-4' />
								<span className='hidden sm:inline'>{t.backToHome}</span>
								<span className='sm:hidden'>Home</span>
							</button>
						)}

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
				</div>
			</div>
		</header>
	)
}

export default Header
