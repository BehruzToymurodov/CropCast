import { useMemo } from 'react'
import {
	Navigate,
	Route,
	Routes,
	Outlet,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom'
import { categories } from '../data/categories'
import AnalysisView from '../components/analysis/AnalysisView'
import LoginPage from '../components/auth/LoginPage'
import RegisterPage from '../components/auth/RegisterPage'
import CategoriesView from '../components/categories/CategoriesView'
import CategoryCropsView from '../components/categories/CategoryCropsView'
import SearchView from '../components/categories/SearchView'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import HomeView from '../components/home/HomeView'
import TechnicalMapCategoriesView from '../components/technicalmap/TechnicalMapCategoriesView'
import TechnicalMapCropsView from '../components/technicalmap/TechnicalMapCropsView'
import TechnicalMapView from '../components/technicalmap/TechnicalMapView'
import ProfilePage from '../components/profile/ProfilePage'

const ProtectedRoute = ({ isAuthenticated }) => {
	if (!isAuthenticated) {
		return <Navigate to='/login' replace />
	}
	return <Outlet />
}

const AppLayout = ({
	language,
	setLanguage,
	currency,
	setCurrency,
	currentUser,
	onBackToHome,
	t,
}) => {
	const navigate = useNavigate()
	const location = useLocation()
	const showBackToHome = location.pathname !== '/'

	return (
		<div className='min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50'>
			<Header
				language={language}
				setLanguage={setLanguage}
				showBackToHome={showBackToHome}
				onBackToHome={() => {
					onBackToHome()
					navigate('/')
				}}
				t={t}
				currency={currency}
				setCurrency={setCurrency}
				currentUser={currentUser}
			/>

			<main className='w-full px-4 py-8 pb-24'>
				<Outlet />
			</main>

			<Footer t={t} />
		</div>
	)
}

const HomeRoute = ({ t }) => {
	const navigate = useNavigate()

	return (
		<HomeView
			t={t}
			onNavigate={path => {
				navigate(path)
			}}
		/>
	)
}

const CategoriesRoute = ({ t, language }) => {
	const navigate = useNavigate()

	return (
		<CategoriesView
			t={t}
			categories={categories}
			language={language}
			onSelectCategory={key => navigate(`/categories/${key}`)}
		/>
	)
}

const CategoryCropsRoute = ({ t, language, onCropClick }) => {
	const { categoryKey } = useParams()
	const category = categories[categoryKey]

	if (!category) {
		return <Navigate to='/categories' replace />
	}

	return (
		<CategoryCropsView
			t={t}
			category={category}
			language={language}
			onCropClick={onCropClick}
		/>
	)
}

const SearchRoute = ({
	t,
	searchQuery,
	setSearchQuery,
	onAnalyze,
	loading,
	analysis,
	error,
	currency,
	language,
}) => {
	const showSearch = !analysis && !loading

	return (
		<>
			{showSearch && (
				<SearchView
					t={t}
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					onAnalyze={onAnalyze}
					loading={loading}
					error={error}
				/>
			)}
			<AnalysisView
				t={t}
				loading={loading}
				analysis={analysis}
				currency={currency}
				language={language}
				onAnalyzeAlternative={onAnalyze}
			/>
		</>
	)
}

const TechnicalMapCategoriesRoute = ({ t, language }) => {
	const navigate = useNavigate()

	return (
		<TechnicalMapCategoriesView
			t={t}
			categories={categories}
			language={language}
			onSelectCategory={key => navigate(`/technical-map/${key}`)}
		/>
	)
}

const TechnicalMapCropsRoute = ({ t, language }) => {
	const { categoryKey } = useParams()
	const category = categories[categoryKey]

	if (!category) {
		return <Navigate to='/technical-map' replace />
	}

	return (
		<TechnicalMapCropsView
			t={t}
			category={category}
			language={language}
			categoryKey={categoryKey}
		/>
	)
}

const TechnicalMapDetailRoute = ({ t, language }) => {
	const { categoryKey, cropName } = useParams()
	const category = categories[categoryKey]
	const decodedCropName = decodeURIComponent(cropName || '')
	const crop = category?.crops?.find(item => item.name === decodedCropName)

	if (!category || !crop) {
		return <Navigate to='/technical-map' replace />
	}

	return (
		<TechnicalMapView
			t={t}
			crop={crop}
			language={language}
		/>
	)
}

const AppRoutes = ({
	language,
	setLanguage,
	t,
	currency,
	setCurrency,
	currentUser,
	isAuthenticated,
	onLogout,
	onLogin,
	onRegister,
	onGoogleAuth,
	onUpdateUser,
	onBackToHome,
	searchQuery,
	setSearchQuery,
	onAnalyze,
	loading,
	analysis,
	error,
}) => {
	const navigate = useNavigate()
	const authNavigate = useMemo(
		() => ({
			goToLogin: () => navigate('/login'),
			goToRegister: () => navigate('/register'),
		}),
		[navigate],
	)

	return (
		<Routes>
			<Route
				path='/login'
				element={
					<LoginPage
						onLogin={onLogin}
						onGoogleAuth={onGoogleAuth}
						onSwitchToRegister={authNavigate.goToRegister}
						language={language}
						setLanguage={setLanguage}
						t={t}
					/>
				}
			/>
			<Route
				path='/register'
				element={
					<RegisterPage
						onRegister={onRegister}
						onSwitchToLogin={authNavigate.goToLogin}
						onGoogleAuth={onGoogleAuth}
						language={language}
						setLanguage={setLanguage}
						t={t}
					/>
				}
			/>

			<Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
				<Route
					element={
						<AppLayout
							language={language}
							setLanguage={setLanguage}
							currency={currency}
							setCurrency={setCurrency}
							currentUser={currentUser}
							onBackToHome={onBackToHome}
							t={t}
						/>
					}
				>
					<Route index element={<HomeRoute t={t} />} />
					<Route
						path='categories'
						element={<CategoriesRoute t={t} language={language} />}
					/>
					<Route
						path='categories/:categoryKey'
						element={
							<CategoryCropsRoute
								t={t}
								language={language}
								onCropClick={onAnalyze}
							/>
						}
					/>
					<Route
						path='search'
						element={
							<SearchRoute
								t={t}
								searchQuery={searchQuery}
								setSearchQuery={setSearchQuery}
								onAnalyze={onAnalyze}
								loading={loading}
								analysis={analysis}
								error={error}
								currency={currency}
								language={language}
							/>
						}
					/>
					<Route
						path='technical-map'
						element={
							<TechnicalMapCategoriesRoute t={t} language={language} />
						}
					/>
					<Route
						path='technical-map/:categoryKey'
						element={<TechnicalMapCropsRoute t={t} language={language} />}
					/>
					<Route
						path='technical-map/:categoryKey/:cropName'
						element={<TechnicalMapDetailRoute t={t} language={language} />}
					/>
					<Route
						path='profile'
						element={
							<ProfilePage
								t={t}
								currentUser={currentUser}
								onUpdateUser={onUpdateUser}
								onLogout={onLogout}
							/>
						}
					/>
				</Route>
			</Route>

			<Route
				path='*'
				element={
					<Navigate to={isAuthenticated ? '/' : '/login'} replace />
				}
			/>
		</Routes>
	)
}

export default AppRoutes
