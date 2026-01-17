import { Globe } from 'lucide-react'

const LanguageSwitcher = ({ language, setLanguage }) => {
	return (
		<div className='flex items-center gap-2 bg-green-600 rounded-lg p-1'>
			<Globe className='w-5 h-5 ml-2' />
			<button
				onClick={() => setLanguage('uz')}
				className={`px-4 py-2 rounded-md transition-colors ${
					language === 'uz'
						? 'bg-white text-green-700 font-semibold'
						: 'text-white hover:bg-green-500'
				}`}
			>
				UZ
			</button>
			<button
				onClick={() => setLanguage('ru')}
				className={`px-4 py-2 rounded-md transition-colors ${
					language === 'ru'
						? 'bg-white text-green-700 font-semibold'
						: 'text-white hover:bg-green-500'
				}`}
			>
				РУ
			</button>
			<button
				onClick={() => setLanguage('en')}
				className={`px-4 py-2 rounded-md transition-colors ${
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
