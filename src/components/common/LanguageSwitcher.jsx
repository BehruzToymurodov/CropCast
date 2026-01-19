import { Globe } from 'lucide-react'

const LanguageSwitcher = ({ language, setLanguage }) => {
	return (
		<div className='flex items-center gap-2 bg-green-600 rounded-lg px-2 py-2'>
			<Globe className='w-4 h-4' />
			<select
				value={language}
				onChange={e => setLanguage(e.target.value)}
				className='bg-transparent text-white text-sm md:text-base font-semibold outline-none cursor-pointer'
			>
				<option value='uz' className='text-gray-800'>
					UZ 🇺🇿
				</option>
				<option value='ru' className='text-gray-800'>
					РУ 🇷🇺
				</option>
				<option value='en' className='text-gray-800'>
					EN 🇬🇧
				</option>
			</select>
		</div>
	)
}

export default LanguageSwitcher
