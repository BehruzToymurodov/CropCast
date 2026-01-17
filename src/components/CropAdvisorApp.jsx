import { useState } from 'react'
import { categories } from '../data/categories'
import { translations } from '../data/translations'
import { generateMockData, getMockAnalysis } from '../utils/mockData'
import AnalysisView from './analysis/AnalysisView'
import CategoriesView from './categories/CategoriesView'
import CategoryCropsView from './categories/CategoryCropsView'
import SearchView from './categories/SearchView'
import Footer from './common/Footer'
import Header from './common/Header'
import HomeView from './home/HomeView'
import TechnicalMapCategoriesView from './technicalmap/TechnicalMapCategoriesView'
import TechnicalMapCropsView from './technicalmap/TechnicalMapCropsView'
import TechnicalMapView from './technicalmap/TechnicalMapView'

const CropAdvisorApp = () => {
	const [language, setLanguage] = useState('uz')
	const [view, setView] = useState('home')
	const [selectedCategory, setSelectedCategory] = useState(null)
	const [searchQuery, setSearchQuery] = useState('')
	const [loading, setLoading] = useState(false)
	const [analysis, setAnalysis] = useState(null)
	const [error, setError] = useState(null)
	const [currency, setCurrency] = useState('USD')
	const [selectedCropForMap, setSelectedCropForMap] = useState(null)

	const t = translations[language]

	const analyzeCrop = async (cropName = searchQuery) => {
		const nameToAnalyze = cropName || searchQuery

		if (!nameToAnalyze.trim()) {
			setError(t.errorMsg)
			return
		}

		setLoading(true)
		setError(null)
		setAnalysis(null)
		setView('analysis')

		try {
			const historicalData = generateMockData(nameToAnalyze)
			await new Promise(resolve => setTimeout(resolve, 1500))
			const analysisResult = getMockAnalysis(nameToAnalyze, language)

			setAnalysis({
				...analysisResult,
				cropName: nameToAnalyze,
				historicalData,
			})
		} catch (err) {
			console.error('Analysis error:', err)
			setError(t.errorAnalysis)
		} finally {
			setLoading(false)
		}
	}

	const handleCropClick = crop => {
		const cropName =
			language === 'uz'
				? crop.name
				: language === 'ru'
					? crop.nameRu
					: crop.nameEn
		setSearchQuery(cropName)
		analyzeCrop(cropName)
	}

	const handleTechnicalMapCropClick = crop => {
		setSelectedCropForMap(crop)
		setView('technicalmap-detail')
	}

	const handleBackToHome = () => {
		setView('home')
		setSelectedCategory(null)
		setAnalysis(null)
		setSearchQuery('')
		setError(null)
		setSelectedCropForMap(null)
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50'>
			<Header
				language={language}
				setLanguage={setLanguage}
				view={view}
				onBackToHome={handleBackToHome}
				t={t}
				currency={currency}
				setCurrency={setCurrency}
			/>

			<main className='max-w-7xl mx-auto px-4 py-8'>
				{view === 'home' && <HomeView t={t} setView={setView} />}

				{view === 'categories' && !selectedCategory && (
					<CategoriesView
						t={t}
						categories={categories}
						language={language}
						setSelectedCategory={setSelectedCategory}
					/>
				)}

				{view === 'categories' && selectedCategory && (
					<CategoryCropsView
						t={t}
						category={categories[selectedCategory]}
						language={language}
						onBack={() => setSelectedCategory(null)}
						onCropClick={handleCropClick}
					/>
				)}

				{view === 'search' && !analysis && !loading && (
					<SearchView
						t={t}
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
						onAnalyze={analyzeCrop}
						loading={loading}
						error={error}
					/>
				)}

				{(view === 'analysis' || view === 'search') && (
					<AnalysisView
						t={t}
						loading={loading}
						analysis={analysis}
						currency={currency}
						language={language}
						onAnalyzeAlternative={analyzeCrop}
					/>
				)}

				{view === 'technicalmap-categories' && !selectedCategory && (
					<TechnicalMapCategoriesView
						t={t}
						categories={categories}
						language={language}
						setSelectedCategory={setSelectedCategory}
					/>
				)}

				{view === 'technicalmap-categories' && selectedCategory && (
					<TechnicalMapCropsView
						t={t}
						category={categories[selectedCategory]}
						language={language}
						onBack={() => setSelectedCategory(null)}
						onCropClick={handleTechnicalMapCropClick}
					/>
				)}

				{view === 'technicalmap-detail' && selectedCropForMap && (
					<TechnicalMapView
						t={t}
						crop={selectedCropForMap}
						language={language}
						onBack={() => {
							setView('technicalmap-categories')
							setSelectedCropForMap(null)
						}}
					/>
				)}
			</main>

			<Footer t={t} />
		</div>
	)
}

export default CropAdvisorApp
