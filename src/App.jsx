import './App.css'

import { BrowserRouter } from 'react-router-dom'
import CropAdvisorApp from './components/CropAdvisorApp'

function App() {
	return (
		<BrowserRouter>
			<CropAdvisorApp />
		</BrowserRouter>
	)
}

export default App
