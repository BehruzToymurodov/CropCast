import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { translations } from '../data/translations'
import { generateMockData, getMockAnalysis } from '../utils/mockData'
import AppRoutes from '../routes/AppRoutes'

const CropAdvisorApp = () => {
	const [language, setLanguage] = useState('uz')
	const [searchQuery, setSearchQuery] = useState('')
	const [loading, setLoading] = useState(false)
	const [analysis, setAnalysis] = useState(null)
	const [error, setError] = useState(null)
	const [currency, setCurrency] = useState('USD')
	const navigate = useNavigate()

	// Authentication states
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [currentUser, setCurrentUser] = useState(null)

	const t = translations[language]

	// Check if user is already logged in
	useEffect(() => {
		const storedUser = localStorage.getItem('currentUser')
		if (storedUser) {
			setCurrentUser(JSON.parse(storedUser))
			setIsAuthenticated(true)
		}
	}, [])

	const handleLogin = user => {
		setCurrentUser(user)
		setIsAuthenticated(true)
		navigate('/')
	}

	const handleRegister = user => {
		setCurrentUser(user)
		setIsAuthenticated(true)
		navigate('/')
	}

	const handleGoogleAuth = user => {
		setCurrentUser(user)
		setIsAuthenticated(true)
		navigate('/')
	}

	const handleLogout = () => {
		localStorage.removeItem('currentUser')
		setCurrentUser(null)
		setIsAuthenticated(false)
		navigate('/login')
	}

	const handleUpdateUser = updates => {
		const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')
		let userUpdated = false
		const updatedUsers = storedUsers.map(user => {
			if (user.id === currentUser?.id) {
				userUpdated = true
				return { ...user, ...updates }
			}
			return user
		})

		if (currentUser) {
			const updatedCurrentUser = { ...currentUser, ...updates }
			setCurrentUser(updatedCurrentUser)
			localStorage.setItem('currentUser', JSON.stringify(updatedCurrentUser))
			if (!userUpdated) {
				updatedUsers.push(updatedCurrentUser)
			}
		}

		localStorage.setItem('users', JSON.stringify(updatedUsers))
	}

	const analyzeCrop = async (cropName = searchQuery) => {
		const nameToAnalyze = cropName || searchQuery

		if (!nameToAnalyze.trim()) {
			setError(t.errorMsg)
			return
		}

		setSearchQuery(nameToAnalyze)
		setLoading(true)
		setError(null)
		setAnalysis(null)
		navigate('/search')

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

	const handleBackToHome = () => {
		setAnalysis(null)
		setSearchQuery('')
		setError(null)
	}

	return (
		<AppRoutes
			language={language}
			setLanguage={setLanguage}
			t={t}
			currency={currency}
			setCurrency={setCurrency}
			currentUser={currentUser}
			isAuthenticated={isAuthenticated}
			onLogout={handleLogout}
			onLogin={handleLogin}
			onRegister={handleRegister}
			onGoogleAuth={handleGoogleAuth}
			onUpdateUser={handleUpdateUser}
			onBackToHome={handleBackToHome}
			searchQuery={searchQuery}
			setSearchQuery={setSearchQuery}
			onAnalyze={analyzeCrop}
			loading={loading}
			analysis={analysis}
			error={error}
		/>
	)
}

export default CropAdvisorApp
