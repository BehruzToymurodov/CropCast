const getCategoryName = (category, language) => {
	if (language === 'uz') return category.nameUz
	if (language === 'ru') return category.nameRu
	return category.nameEn
}

const TechnicalMapCategoriesView = ({
	t,
	categories,
	language,
	setSelectedCategory,
}) => {
	return (
		<div className='space-y-8'>
			<div className='text-center mb-8'>
				<h2 className='text-3xl font-bold text-gray-800 mb-2'>
					{t.technicalMap}
				</h2>
				<p className='text-gray-600'>{t.selectCropForMap}</p>
			</div>

			<div className='grid md:grid-cols-3 gap-6'>
				{Object.entries(categories).map(([key, category]) => (
					<button
						key={key}
						onClick={() => setSelectedCategory(key)}
						className='bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:scale-105 group'
					>
						<div
							className={`bg-gradient-to-br ${category.color} text-white rounded-lg p-6 mb-4`}
						>
							<div className='text-6xl text-center mb-2'>{category.image}</div>
						</div>
						<h3 className='text-xl font-bold text-gray-800 text-center group-hover:text-green-600 transition-colors'>
							{getCategoryName(category, language)}
						</h3>
						<p className='text-gray-500 text-center mt-2'>
							{category.crops.length} ta ekin
						</p>
					</button>
				))}
			</div>
		</div>
	)
}

export default TechnicalMapCategoriesView
