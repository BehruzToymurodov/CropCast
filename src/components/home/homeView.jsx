import { Grid, Search } from 'lucide-react'

const HomeView = ({ t, setView }) => {
	return (
		<div className='space-y-8'>
			<div className='text-center mb-12'>
				<h2 className='text-4xl font-bold text-gray-800 mb-4'>{t.welcome}</h2>
				<p className='text-xl text-gray-600'>{t.welcomeDesc}</p>
			</div>

			<div className='grid md:grid-cols-2 gap-8'>
				<button
					onClick={() => setView('categories')}
					className='bg-white rounded-2xl shadow-xl p-12 hover:shadow-2xl transition-all transform hover:scale-105 group'
				>
					<div className='text-center'>
						<div className='text-8xl mb-6 group-hover:scale-110 transition-transform'>
							🌾
						</div>
						<h3 className='text-3xl font-bold text-gray-800 mb-4'>
							{t.browseCategories}
						</h3>
						<p className='text-gray-600 text-lg'>{t.browseCategoriesDesc}</p>
						<div className='mt-6 flex items-center justify-center gap-2 text-green-600 font-semibold'>
							<Grid className='w-5 h-5' />
							<span>6 {t.categoriesAvailable}</span>
						</div>
					</div>
				</button>

				<button
					onClick={() => setView('search')}
					className='bg-white rounded-2xl shadow-xl p-12 hover:shadow-2xl transition-all transform hover:scale-105 group'
				>
					<div className='text-center'>
						<div className='text-8xl mb-6 group-hover:scale-110 transition-transform'>
							🔍
						</div>
						<h3 className='text-3xl font-bold text-gray-800 mb-4'>
							{t.searchDirect}
						</h3>
						<p className='text-gray-600 text-lg'>{t.searchDirectDesc}</p>
						<div className='mt-6 flex items-center justify-center gap-2 text-green-600 font-semibold'>
							<Search className='w-5 h-5' />
							<span>{t.quickSearch}</span>
						</div>
					</div>
				</button>
			</div>
		</div>
	)
}

export default HomeView
