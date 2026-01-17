import { Loader2 } from 'lucide-react'
import AlternativeCrops from './AlternativeCrops'
import DetailedAnalysis from './DetailedAnalysis'
import HistoricalCharts from './HistoricalCharts'
import KeyInsights from './KeyInsights'
import RecommendationCard from './RecommendationCard'

const AnalysisView = ({
	t,
	loading,
	analysis,
	currency,
	language,
	onAnalyzeAlternative,
}) => {
	if (loading) {
		return (
			<div className='bg-white rounded-xl shadow-lg p-16 text-center'>
				<Loader2 className='w-16 h-16 animate-spin text-green-600 mx-auto mb-4' />
				<p className='text-xl text-gray-600'>{t.analyzing}</p>
			</div>
		)
	}

	if (!analysis) return null

	return (
		<div className='space-y-6'>
			<RecommendationCard analysis={analysis} t={t} />
			<KeyInsights insights={analysis.keyInsights} t={t} />
			<DetailedAnalysis reasoning={analysis.reasoning} t={t} />
			<HistoricalCharts
				data={analysis.historicalData}
				t={t}
				currency={currency}
			/>
			<AlternativeCrops
				alternatives={analysis.alternatives}
				t={t}
				onAnalyze={onAnalyzeAlternative}
			/>
		</div>
	)
}

export default AnalysisView
