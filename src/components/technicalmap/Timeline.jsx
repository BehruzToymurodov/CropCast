const Timeline = ({ stages, t, language }) => {
	const getStageName = stage => {
		if (language === 'uz') return stage.nameUz
		if (language === 'ru') return stage.nameRu
		return stage.nameEn
	}

	return (
		<div className='bg-white rounded-xl shadow-lg p-8'>
			<h2 className='text-2xl font-bold text-gray-800 mb-6'>{t.timeline}</h2>

			<div className='relative'>
				{/* Timeline line */}
				<div className='absolute left-6 top-0 bottom-0 w-1 bg-green-200'></div>

				{/* Timeline items */}
				<div className='space-y-6'>
					{stages.map((stage, idx) => (
						<div key={idx} className='relative flex items-start gap-4'>
							{/* Timeline dot */}
							<div className='relative z-10 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0'>
								{stage.stage}
							</div>

							{/* Content */}
							<div className='flex-1 bg-green-50 rounded-lg p-4'>
								<h3 className='font-bold text-gray-800 mb-1'>
									{getStageName(stage)}
								</h3>
								<p className='text-sm text-gray-600'>{stage.duration}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Timeline
