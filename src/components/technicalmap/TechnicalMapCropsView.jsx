import { ArrowLeft, BookOpen } from 'lucide-react'

const getCategoryName = (category, language) => {
	if (language === 'uz') return category.nameUz
	if (language === 'ru') return category.nameRu
	return category.nameEn
}

const getCropName = (crop, language) => {
	if (language === 'uz') return crop.name
	if (language === 'ru') return crop.nameRu
	return crop.nameEn
}

const TechnicalMapCropsView = ({
	t,
	category,
	language,
	onBack,
	onCropClick,
}) => {
	return (
		<div className='space-y-8'>
			<div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-6 md:mb-8'>
				<button
					onClick={onBack}
					className='flex items-center gap-2 bg-white px-3 py-2 md:px-4 md:py-2 rounded-lg shadow hover:shadow-md transition-all text-sm md:text-base'
				>
					<ArrowLeft className='w-5 h-5' />
					{t.backToCategories}
				</button>
				<div>
					<h2 className='text-2xl md:text-3xl font-bold text-gray-800'>
						{getCategoryName(category, language)}
					</h2>
					<p className='text-sm md:text-base text-gray-600'>
						{t.selectCropForMap}
					</p>
				</div>
			</div>

			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6'>
				{category.crops.map((crop, idx) => (
					<button
						key={idx}
						onClick={() => onCropClick(crop)}
						className='bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-all transform hover:scale-105 group'
					>
						<div className='text-5xl md:text-6xl text-center mb-3 md:mb-4 group-hover:scale-110 transition-transform'>
							{crop.emoji}
						</div>
						<h3 className='text-sm md:text-lg font-bold text-gray-800 text-center group-hover:text-green-600 transition-colors mb-2'>
							{getCropName(crop, language)}
						</h3>
						<div className='flex items-center justify-center gap-1 text-xs md:text-sm text-green-600'>
							<BookOpen className='w-4 h-4' />
							<span>{t.growingGuide}</span>
						</div>
					</button>
				))}
			</div>
		</div>
	)
}

export default TechnicalMapCropsView
