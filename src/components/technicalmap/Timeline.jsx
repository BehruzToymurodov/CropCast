const Timeline = ({ stages, t, language }) => {
	const getStageName = stage => {
		if (language === 'uz') return stage.nameUz
		if (language === 'ru') return stage.nameRu
		return stage.nameEn
	}

	return (
		<div className='bg-white rounded-xl shadow-lg p-6 md:p-8'>
			<h2 className='text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6'>
				{t.timeline}
			</h2>

			<div className='relative'>
				{/* Timeline vertical line - hidden on mobile */}
				<div className='absolute left-6 top-0 bottom-0 w-1 bg-green-200 hidden md:block'></div>

				{/* Timeline items */}
				<div className='space-y-4 md:space-y-6'>
					{stages.map((stage, idx) => (
						<div key={idx} className='relative flex items-start gap-3 md:gap-4'>
							{/* Timeline dot/number */}
							<div className='relative z-10 bg-green-500 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold flex-shrink-0 text-sm md:text-base'>
								{stage.stage}
							</div>

							{/* Content */}
							<div className='flex-1 bg-green-50 rounded-lg p-3 md:p-4'>
								<h3 className='text-sm md:text-base font-bold text-gray-800 mb-1'>
									{getStageName(stage)}
								</h3>
								<p className='text-xs md:text-sm text-gray-600'>
									{stage.duration}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Timeline
