import {
	Bar,
	CartesianGrid,
	ComposedChart,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import { convertPrice, getCurrencySymbol } from '../../utils/currencyConverter'

const HistoricalCharts = ({ data, t, currency }) => {
	const convertedData = data.map(item => ({
		...item,
		price: parseFloat(convertPrice(item.priceUSD, currency)),
	}))

	const currencySymbol = getCurrencySymbol(currency)

	return (
		<div className='bg-white rounded-xl shadow-lg p-6 md:p-8'>
			<h3 className='text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6'>
				{t.historicalTrends}
			</h3>

			<div className='mb-8'>
				<h4 className='text-base md:text-lg font-semibold text-gray-700 mb-4'>
					{t.priceTrends}
				</h4>
				<ResponsiveContainer width='100%' height={250}>
					<LineChart data={convertedData}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='year' tick={{ fontSize: 12 }} />
						<YAxis tick={{ fontSize: 12 }} />
						<Tooltip formatter={value => `${currencySymbol} ${value}`} />
						<Legend wrapperStyle={{ fontSize: '14px' }} />
						<Line
							type='monotone'
							dataKey='price'
							stroke='#16a34a'
							strokeWidth={2}
							name={`${t.price} (${currency})`}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>

			<div className='mb-8'>
				<h4 className='text-base md:text-lg font-semibold text-gray-700 mb-4'>
					{t.productionVsWaste}
				</h4>
				<ResponsiveContainer width='100%' height={300}>
					<ComposedChart data={data} barGap={8}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='year' tick={{ fontSize: 12 }} />
						<YAxis
							yAxisId='left'
							orientation='left'
							stroke='#16a34a'
							tick={{ fontSize: 12 }}
						/>
						<YAxis
							yAxisId='right'
							orientation='right'
							stroke='#dc2626'
							tick={{ fontSize: 12 }}
						/>
						<Tooltip />
						<Legend wrapperStyle={{ fontSize: '14px' }} />
						<Bar
							yAxisId='left'
							dataKey='production'
							fill='#16a34a'
							name={`${t.production} (tonna)`}
							radius={[8, 8, 0, 0]}
						/>
						<Bar
							yAxisId='right'
							dataKey='waste'
							fill='#dc2626'
							name={`${t.waste} (%)`}
							radius={[8, 8, 0, 0]}
						/>
					</ComposedChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default HistoricalCharts
