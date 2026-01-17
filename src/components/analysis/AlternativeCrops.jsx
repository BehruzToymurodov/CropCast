import { Sprout } from 'lucide-react'

const AlternativeCrops = ({ alternatives, t, onAnalyze }) => {
	return (
		<div className='bg-white rounded-xl shadow-lg p-6 md:p-8'>
			<h3 className='text-lg md:text-xl font-bold text-gray-800 mb-4'>
				{t.alternatives}
			</h3>
			<p className='text-sm md:text-base text-gray-600 mb-4'>
				{t.alternativesDesc}
			</p>
			<div className='flex flex-col sm:flex-row gap-3 md:gap-4'>
				{alternatives.map((alt, idx) => (
					<button
						key={idx}
						onClick={() => onAnalyze(alt)}
						className='flex-1 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-lg p-4 transition-colors'
					>
						<Sprout className='w-6 h-6 text-green-600 mx-auto mb-2' />
						<div className='font-semibold text-gray-800 text-sm md:text-base'>
							{alt}
						</div>
					</button>
				))}
			</div>
		</div>
	)
}

export default AlternativeCrops
