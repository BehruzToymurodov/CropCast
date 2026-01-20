const DetailedAnalysis = ({ reasoning, t }) => {
	return (
		<div className='bg-white rounded-xl shadow-lg p-6 md:p-8'>
			<h3 className='text-lg md:text-xl font-bold text-gray-800 mb-4'>
				{t.detailedAnalysis}
			</h3>
			<p className='text-sm md:text-base text-gray-700 leading-relaxed'>
				{reasoning}
			</p>
		</div>
	)
}

export default DetailedAnalysis
