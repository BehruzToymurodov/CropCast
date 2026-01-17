import {
	Calendar,
	ChevronDown,
	ChevronUp,
	Lightbulb,
	ListChecks,
	Package,
} from 'lucide-react'
import { useState } from 'react'

const StageCard = ({ stage, t, language }) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const getStageName = () => {
		if (language === 'uz') return stage.nameUz
		if (language === 'ru') return stage.nameRu
		return stage.nameEn
	}

	const getActivityText = activity => {
		if (language === 'uz') return activity.uz
		if (language === 'ru') return activity.ru
		return activity.en
	}

	return (
		<div className='bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-green-500'>
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className='w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors'
			>
				<div className='flex items-center gap-4'>
					<div className='bg-green-100 text-green-700 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg'>
						{stage.stage}
					</div>
					<div className='text-left'>
						<h3 className='text-xl font-bold text-gray-800'>
							{getStageName()}
						</h3>
						<div className='flex items-center gap-2 text-gray-600 mt-1'>
							<Calendar className='w-4 h-4' />
							<span>{stage.duration}</span>
						</div>
					</div>
				</div>
				{isExpanded ? (
					<ChevronUp className='w-6 h-6 text-gray-400' />
				) : (
					<ChevronDown className='w-6 h-6 text-gray-400' />
				)}
			</button>

			{isExpanded && (
				<div className='p-6 pt-0 space-y-6 bg-gray-50'>
					{/* Activities */}
					<div>
						<div className='flex items-center gap-2 mb-3'>
							<ListChecks className='w-5 h-5 text-green-600' />
							<h4 className='font-bold text-gray-800'>{t.activities}</h4>
						</div>
						<ul className='space-y-2'>
							{stage.activities.map((activity, idx) => (
								<li key={idx} className='flex items-start gap-2'>
									<span className='text-green-600 mt-1'>✓</span>
									<span className='text-gray-700'>
										{getActivityText(activity)}
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Materials */}
					<div>
						<div className='flex items-center gap-2 mb-3'>
							<Package className='w-5 h-5 text-blue-600' />
							<h4 className='font-bold text-gray-800'>{t.materials}</h4>
						</div>
						<ul className='space-y-2'>
							{stage.materials.map((material, idx) => (
								<li key={idx} className='flex items-start gap-2'>
									<span className='text-blue-600 mt-1'>•</span>
									<span className='text-gray-700'>
										{getActivityText(material)}
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Tips */}
					<div className='bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded'>
						<div className='flex items-center gap-2 mb-2'>
							<Lightbulb className='w-5 h-5 text-yellow-600' />
							<h4 className='font-bold text-gray-800'>{t.tips}</h4>
						</div>
						<ul className='space-y-1'>
							{stage.tips.map((tip, idx) => (
								<li key={idx} className='text-gray-700 text-sm'>
									💡 {getActivityText(tip)}
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default StageCard
