export const generateMockData = cropName => {
	const years = [
		2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
	]
	return years.map(year => ({
		year,
		production: Math.floor(Math.random() * 10000) + 5000,
		priceUSD: Math.floor(Math.random() * 50) + 20,
		waste: Math.floor(Math.random() * 30) + 5,
	}))
}

export const getMockAnalysis = (cropName, lang) => {
	const analyses = {
		en: {
			marketOutlook: `Based on historical trends, ${cropName} shows promising market conditions for 2026 with stable demand and controlled supply.`,
			keyInsights: [
				`Strong market demand expected in 2026 with balanced supply`,
				`Price stability predicted based on production planning`,
				`Low waste percentage indicates efficient market distribution`,
			],
			reasoning: `Historical data shows ${cropName} has maintained steady pricing with minimal waste over the past three years. Market indicators suggest continued demand growth while supply remains well-managed, making it a favorable choice for 2026 planting.`,
		},
		ru: {
			marketOutlook: `Основываясь на исторических трендах, ${cropName} показывает перспективные рыночные условия на 2026 год со стабильным спросом и контролируемым предложением.`,
			keyInsights: [
				`Ожидается сильный рыночный спрос в 2026 году при сбалансированном предложении`,
				`Прогнозируется стабильность цен на основе планирования производства`,
				`Низкий процент потерь указывает на эффективное распределение на рынке`,
			],
			reasoning: `Исторические данные показывают, что ${cropName} сохраняла стабильные цены с минимальными потерями за последние три года. Рыночные индикаторы предполагают продолжение роста спроса при хорошо управляемом предложении, что делает ее благоприятным выбором для посадки в 2026 году.`,
		},
		uz: {
			marketOutlook: `Tarixiy tendentsiyalarga asoslanib, ${cropName} 2026 yil uchun barqaror talab va nazorat ostidagi taklif bilan istiqbolli bozor sharoitlarini ko'rsatmoqda.`,
			keyInsights: [
				`2026 yilda muvozanatli taklif bilan kuchli bozor talabi kutilmoqda`,
				`Ishlab chiqarish rejalashtirish asosida narx barqarorligi prognoz qilinmoqda`,
				`Past isrof foizi samarali bozor taqsimotini ko'rsatadi`,
			],
			reasoning: `Tarixiy ma'lumotlar shuni ko'rsatadiki, ${cropName} so'nggi uch yil davomida minimal isrof bilan barqaror narxlarni saqlab qoldi. Bozor ko'rsatkichlari yaxshi boshqariladigan taklif bilan talab o'sishining davom etishini ko'rsatadi, bu esa uni 2026 yilda ekish uchun qulay tanlov qiladi.`,
		},
	}

	const langData = analyses[lang] || analyses.en
	const recommendations = ['PLANT', 'CAUTIOUS', 'PLANT']
	const recommendation =
		recommendations[Math.floor(Math.random() * recommendations.length)]

	return {
		recommendation: recommendation,
		confidence: Math.floor(Math.random() * 20) + 75,
		marketOutlook: langData.marketOutlook,
		priceProjection: recommendation === 'PLANT' ? 'INCREASING' : 'STABLE',
		riskLevel: recommendation === 'PLANT' ? 'LOW' : 'MEDIUM',
		keyInsights: langData.keyInsights,
		alternatives: ['Tomatoes', 'Cucumbers', 'Peppers'],
		reasoning: langData.reasoning,
	}
}
