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
			<div className='max-w-7xl mx-auto px-4 py-6'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<img
							src={logoUrl}
							alt='CropCast Logo'
							className='w-12 h-12 object-contain'
						/>
						<div>
							<h1 className='text-3xl font-bold'>{t.title}</h1>
							<p className='text-green-100 text-sm'>{t.subtitle}</p>
						</div>
					</div>

					<div className='flex items-center gap-4'>
						{view !== 'home' && (
							<button
								onClick={onBackToHome}
								className='flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg transition-colors'
							>
								<ArrowLeft className='w-4 h-4' />
								{t.backToHome}
							</button>
						)}

						<div className='flex items-center gap-2 bg-green-600 rounded-lg px-3 py-2'>
							<DollarSign className='w-4 h-4' />
							<select
								value={currency}
								onChange={e => setCurrency(e.target.value)}
								className='bg-transparent text-white font-semibold outline-none cursor-pointer'
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

						<LanguageSwitcher language={language} setLanguage={setLanguage} />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
