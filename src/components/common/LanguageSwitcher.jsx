import { Globe } from 'lucide-react'

const LanguageSwitcher = ({ language, setLanguage }) => {
	return (
		<div className='flex items-center gap-1 md:gap-2 bg-green-600 rounded-lg p-1'>
			<Globe className='w-4 h-4 ml-1 md:ml-2' />
			<button
				onClick={() => setLanguage('uz')}
				className={`px-2 md:px-4 py-1.5 md:py-2 rounded-md transition-colors text-sm md:text-base ${
					language === 'uz'
						? 'bg-white text-green-700 font-semibold'
						: 'text-white hover:bg-green-500'
				}`}
			>
				UZ
			</button>
			<button
				onClick={() => setLanguage('ru')}
				className={`px-2 md:px-4 py-1.5 md:py-2 rounded-md transition-colors text-sm md:text-base ${
					language === 'ru'
						? 'bg-white text-green-700 font-semibold'
						: 'text-white hover:bg-green-500'
				}`}
			>
				РУ
			</button>
			<button
				onClick={() => setLanguage('en')}
				className={`px-2 md:px-4 py-1.5 md:py-2 rounded-md transition-colors text-sm md:text-base ${
					language === 'en'
						? 'bg-white text-green-700 font-semibold'
						: 'text-white hover:bg-green-500'
				}`}
			>
				EN
			</button>
		</div>
	)
}

export default LanguageSwitcher
