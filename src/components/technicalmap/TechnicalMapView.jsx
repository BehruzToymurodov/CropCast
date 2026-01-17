import { ArrowLeft, CheckCircle2, Clock } from 'lucide-react'
import { getDefaultTechnicalMap, technicalMaps } from '../../data/technicalMaps'
import StageCard from './StageCard'
import Timeline from './Timeline'

const getCropName = (crop, language) => {
	if (language === 'uz') return crop.name
	if (language === 'ru') return crop.nameRu
	return crop.nameEn
}

const TechnicalMapView = ({ t, crop, language, onBack }) => {
	const cropName = getCropName(crop, language)

	const technicalMap =
		technicalMaps[crop.name] || getDefaultTechnicalMap(cropName, language)

	return (
		<div className='space-y-6 md:space-y-8'>
			<div className='bg-white rounded-xl shadow-lg p-6 md:p-8'>
				<button
					onClick={onBack}
					className='flex items-center gap-2 text-green-600 hover:text-green-700 mb-4 text-sm md:text-base'
				>
					<ArrowLeft className='w-5 h-5' />
					{t.backToCategories}
				</button>

				<div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6'>
					<div className='text-6xl md:text-8xl'>{crop.emoji}</div>
					<div className='flex-1 text-center sm:text-left'>
						<h1 className='text-2xl md:text-4xl font-bold text-gray-800 mb-2'>
							{cropName}
						</h1>
						<p className='text-base md:text-xl text-gray-600 mb-4'>
							{t.technicalMapTitle}
						</p>
						<div className='flex items-center justify-center sm:justify-start gap-2 text-green-600'>
							<Clock className='w-5 h-5' />
							<span className='font-semibold text-sm md:text-base'>
								{t.duration}: {technicalMap.totalDuration}
							</span>
						</div>
					</div>
				</div>
			</div>

			<Timeline stages={technicalMap.stages} t={t} language={language} />

			<div className='space-y-6'>
				<h2 className='text-xl md:text-2xl font-bold text-gray-800'>
					{t.growingStages}
				</h2>
				{technicalMap.stages.map((stage, idx) => (
					<StageCard key={idx} stage={stage} t={t} language={language} />
				))}
			</div>

			<div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 md:p-8 border-2 border-green-200'>
				<div className='flex items-center gap-3 mb-4'>
					<CheckCircle2 className='w-6 h-6 md:w-8 md:h-8 text-green-600' />
					<h3 className='text-xl md:text-2xl font-bold text-gray-800'>
						{t.tips}
					</h3>
				</div>
				<ul className='space-y-2 text-sm md:text-base text-gray-700'>
					<li>
						•{' '}
						{language === 'uz'
							? "Har bir bosqichda ko'rsatilgan tavsiyalarga rioya qiling"
							: language === 'ru'
								? 'Следуйте рекомендациям на каждом этапе'
								: 'Follow recommendations at each stage'}
					</li>
					<li>
						•{' '}
						{language === 'uz'
							? 'Sifatli materiallar va vositalardan foydalaning'
							: language === 'ru'
								? 'Используйте качественные материалы и инструменты'
								: 'Use quality materials and tools'}
					</li>
					<li>
						•{' '}
						{language === 'uz'
							? 'Ob-havo sharoitlarini hisobga oling'
							: language === 'ru'
								? 'Учитывайте погодные условия'
								: 'Consider weather conditions'}
					</li>
					<li>
						•{' '}
						{language === 'uz'
							? "Muntazam nazorat qiling va kerakli choralarni ko'ring"
							: language === 'ru'
								? 'Регулярно контролируйте и принимайте необходимые меры'
								: 'Monitor regularly and take necessary actions'}
					</li>
				</ul>
			</div>
		</div>
	)
}

export default TechnicalMapView
