import {
	AlertTriangle,
	BarChart3,
	CheckCircle,
	TrendingDown,
	TrendingUp,
} from 'lucide-react'

const RecommendationCard = ({ analysis, t }) => {
	const getRecommendationColor = rec => {
		switch (rec) {
			case 'PLANT':
				return 'text-green-600 bg-green-50 border-green-200'
			case 'AVOID':
				return 'text-red-600 bg-red-50 border-red-200'
			case 'CAUTIOUS':
				return 'text-yellow-600 bg-yellow-50 border-yellow-200'
			default:
				return 'text-gray-600 bg-gray-50 border-gray-200'
		}
	}

	const getRecommendationIcon = rec => {
		switch (rec) {
			case 'PLANT':
				return <CheckCircle className='w-6 h-6 md:w-8 md:h-8' />
			case 'AVOID':
				return <AlertTriangle className='w-6 h-6 md:w-8 md:h-8' />
			case 'CAUTIOUS':
				return <TrendingDown className='w-6 h-6 md:w-8 md:h-8' />
			default:
				return <BarChart3 className='w-6 h-6 md:w-8 md:h-8' />
		}
	}

	return (
		<div
			className={`rounded-xl shadow-lg p-6 md:p-8 border-2 ${getRecommendationColor(analysis.recommendation)}`}
		>
			<div className='flex flex-col sm:flex-row items-start gap-4 md:gap-6'>
				<div className='flex-shrink-0'>
					{getRecommendationIcon(analysis.recommendation)}
				</div>
				<div className='flex-1 w-full'>
					<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2'>
						<h3 className='text-xl md:text-2xl font-bold'>
							{analysis.cropName.toUpperCase()} - {t[analysis.recommendation]}
						</h3>
						<span className='text-sm font-semibold'>
							{t.confidence}: {analysis.confidence}%
						</span>
					</div>
					<p className='text-base md:text-lg mb-4'>{analysis.marketOutlook}</p>
					<div className='grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-4'>
						<div className='bg-white bg-opacity-60 rounded-lg p-3'>
							<div className='text-sm font-semibold mb-1'>
								{t.priceProjection}
							</div>
							<div className='flex items-center gap-2'>
								{analysis.priceProjection === 'INCREASING' ? (
									<TrendingUp className='w-5 h-5' />
								) : (
									<TrendingDown className='w-5 h-5' />
								)}
								<span className='font-bold text-sm md:text-base'>
									{t[analysis.priceProjection]}
								</span>
							</div>
						</div>
						<div className='bg-white bg-opacity-60 rounded-lg p-3'>
							<div className='text-sm font-semibold mb-1'>{t.riskLevel}</div>
							<span className='font-bold text-sm md:text-base'>
								{t[analysis.riskLevel]}
							</span>
						</div>
						<div className='bg-white bg-opacity-60 rounded-lg p-3'>
							<div className='text-sm font-semibold mb-1'>{t.marketStatus}</div>
							<span className='font-bold text-sm md:text-base'>{t.season}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecommendationCard
