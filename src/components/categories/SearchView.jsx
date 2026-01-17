import { BarChart3, Loader2, Search } from 'lucide-react'

const SearchView = ({
	t,
	searchQuery,
	setSearchQuery,
	onAnalyze,
	loading,
	error,
}) => {
	return (
		<div className='bg-white rounded-xl shadow-lg p-8 mb-8'>
			<h2 className='text-2xl font-bold text-gray-800 mb-4'>{t.searchTitle}</h2>
			<p className='text-gray-600 mb-6'>{t.searchDesc}</p>

			<div className='flex gap-4'>
				<div className='flex-1 relative'>
					<Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
					<input
						type='text'
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						onKeyPress={e => e.key === 'Enter' && onAnalyze()}
						placeholder={t.searchPlaceholder}
						className='w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-lg'
					/>
				</div>
				<button
					onClick={onAnalyze}
					disabled={loading}
					className='bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2'
				>
					{loading ? (
						<>
							<Loader2 className='w-5 h-5 animate-spin' />
							{t.analyzing}
						</>
					) : (
						<>
							<BarChart3 className='w-5 h-5' />
							{t.analyzeBtn}
						</>
					)}
				</button>
			</div>

			{error && (
				<div className='mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg'>
					{error}
				</div>
			)}
		</div>
	)
}

export default SearchView
