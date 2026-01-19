import { BookOpen, Grid, Search } from 'lucide-react'

const HomeView = ({ t, onNavigate }) => {
	return (
		<div className='space-y-6 md:space-y-8'>
			<div className='text-center mb-8 md:mb-12'>
				<h2 className='text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4'>
					{t.welcome}
				</h2>
				<p className='text-base md:text-xl text-gray-600 px-4'>
					{t.welcomeDesc}
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-stretch'>
				<button
					onClick={() => onNavigate('/categories')}
					className='bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all transform hover:scale-105 group h-full flex flex-col min-h-[320px] md:min-h-[380px]'
				>
					<div className='text-center flex-1 flex flex-col justify-between'>
						<div className='text-6xl md:text-7xl mb-4 md:mb-6 group-hover:scale-110 transition-transform'>
							🌾
						</div>
						<h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3'>
							{t.browseCategories}
						</h3>
						<p className='text-sm md:text-base text-gray-600'>
							{t.browseCategoriesDesc}
						</p>
						<div className='mt-3 md:mt-4 flex items-center justify-center gap-2 text-green-600 font-semibold text-sm md:text-base'>
							<Grid className='w-4 h-4 md:w-5 md:h-5' />
							<span>6 {t.categoriesAvailable}</span>
						</div>
					</div>
				</button>

				<button
					onClick={() => onNavigate('/search')}
					className='bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all transform hover:scale-105 group h-full flex flex-col min-h-[320px] md:min-h-[380px]'
				>
					<div className='text-center flex-1 flex flex-col justify-between'>
						<div className='text-6xl md:text-7xl mb-4 md:mb-6 group-hover:scale-110 transition-transform'>
							🔍
						</div>
						<h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3'>
							{t.searchDirect}
						</h3>
						<p className='text-sm md:text-base text-gray-600'>
							{t.searchDirectDesc}
						</p>
						<div className='mt-3 md:mt-4 flex items-center justify-center gap-2 text-green-600 font-semibold text-sm md:text-base'>
							<Search className='w-4 h-4 md:w-5 md:h-5' />
							<span>{t.quickSearch}</span>
						</div>
					</div>
				</button>

				<button
					onClick={() => onNavigate('/technical-map')}
					className='bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all transform hover:scale-105 group h-full flex flex-col min-h-[320px] md:min-h-[380px]'
				>
					<div className='text-center flex-1 flex flex-col justify-between'>
						<div className='text-6xl md:text-7xl mb-4 md:mb-6 group-hover:scale-110 transition-transform'>
							📖
						</div>
						<h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3'>
							{t.technicalMap}
						</h3>
						<p className='text-sm md:text-base text-gray-600'>
							{t.technicalMapDesc}
						</p>
						<div className='mt-3 md:mt-4 flex items-center justify-center gap-2 text-green-600 font-semibold text-sm md:text-base'>
							<BookOpen className='w-4 h-4 md:w-5 md:h-5' />
							<span>{t.growingGuide}</span>
						</div>
					</div>
				</button>
			</div>
		</div>
	)
}

export default HomeView
