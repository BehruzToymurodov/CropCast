const getCategoryName = (category, language) => {
	if (language === 'uz') return category.nameUz
	if (language === 'ru') return category.nameRu
	return category.nameEn
}

const CategoriesView = ({ t, categories, language, setSelectedCategory }) => {
	return (
		<div className='space-y-8'>
			<div className='text-center mb-6 md:mb-8 px-4'>
				<h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>
					{t.browseCategories}
				</h2>
				<p className='text-sm md:text-base text-gray-600'>
					{t.browseCategoriesDesc}
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
				{Object.entries(categories).map(([key, category]) => (
					<button
						key={key}
						onClick={() => setSelectedCategory(key)}
						className='bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all transform hover:scale-105 group'
					>
						<div
							className={`bg-gradient-to-br ${category.color} text-white rounded-lg p-4 md:p-6 mb-4`}
						>
							<div className='text-5xl md:text-6xl text-center mb-2'>
								{category.image}
							</div>
						</div>
						<h3 className='text-lg md:text-xl font-bold text-gray-800 text-center group-hover:text-green-600 transition-colors'>
							{getCategoryName(category, language)}
						</h3>
						<p className='text-gray-500 text-center mt-2 text-sm md:text-base'>
							{category.crops.length} ta ekin
						</p>
					</button>
				))}
			</div>
		</div>
	)
}

export default CategoriesView
