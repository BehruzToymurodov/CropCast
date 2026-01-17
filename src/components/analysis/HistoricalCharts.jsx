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
		<div className='bg-white rounded-xl shadow-lg p-8'>
			<h3 className='text-xl font-bold text-gray-800 mb-6'>
				{t.historicalTrends}
			</h3>

			<div className='mb-8'>
				<h4 className='text-lg font-semibold text-gray-700 mb-4'>
					{t.priceTrends}
				</h4>
				<ResponsiveContainer width='100%' height={300}>
					<LineChart data={convertedData}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='year' />
						<YAxis />
						<Tooltip formatter={value => `${currencySymbol} ${value}`} />
						<Legend />
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
				<h4 className='text-lg font-semibold text-gray-700 mb-4'>
					{t.productionVsWaste}
				</h4>
				<ResponsiveContainer width='100%' height={400}>
					<ComposedChart data={data} barGap={8}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='year' />
						<YAxis
							yAxisId='left'
							orientation='left'
							stroke='#16a34a'
							label={{
								value: t.production,
								angle: -90,
								position: 'insideLeft',
								style: { textAnchor: 'middle' },
							}}
						/>
						<YAxis
							yAxisId='right'
							orientation='right'
							stroke='#dc2626'
							label={{
								value: t.waste,
								angle: 90,
								position: 'insideRight',
								style: { textAnchor: 'middle' },
							}}
						/>
						<Tooltip />
						<Legend />
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
