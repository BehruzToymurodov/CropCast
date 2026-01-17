const DetailedAnalysis = ({ reasoning, t }) => {
	return (
		<div className='bg-white rounded-xl shadow-lg p-8'>
			<h3 className='text-xl font-bold text-gray-800 mb-4'>
				{t.detailedAnalysis}
			</h3>
			<p className='text-gray-700 leading-relaxed'>{reasoning}</p>
		</div>
	)
}

export default DetailedAnalysis
