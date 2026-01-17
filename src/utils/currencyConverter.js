export const currencyRates = {
	USD: 1,
	UZS: 12700,
	RUB: 95,
	EUR: 0.92,
}

export const convertPrice = (priceInUSD, targetCurrency) => {
	return (priceInUSD * currencyRates[targetCurrency]).toFixed(2)
}

export const getCurrencySymbol = currency => {
	const symbols = {
		USD: '$',
		UZS: "so'm",
		RUB: '₽',
		EUR: '€',
	}
	return symbols[currency] || '$'
}
