import { CheckCircle } from 'lucide-react'

const KeyInsights = ({ insights, t }) => {
	return (
		<div className='bg-white rounded-xl shadow-lg p-6 md:p-8'>
			<h3 className='text-lg md:text-xl font-bold text-gray-800 mb-4'>
				{t.keyInsights}
			</h3>
			<div className='space-y-3'>
				{insights.map((insight, idx) => (
					<div key={idx} className='flex items-start gap-3'>
						<CheckCircle className='w-5 h-5 text-green-600 flex-shrink-0 mt-0.5' />
						<p className='text-sm md:text-base text-gray-700'>{insight}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default KeyInsights
