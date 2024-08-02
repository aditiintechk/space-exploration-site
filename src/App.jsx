import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Crew from './pages/Crew.jsx'
import Technology from './pages/Technology.jsx'
import Layout from './components/Layout.jsx'
import DestinationLayout from './components/DestinationLayout.jsx'
import Moon from './pages/destination/Moon.jsx'
import Mars from './pages/destination/Mars.jsx'
import Europa from './pages/destination/Europa.jsx'
import Titan from './pages/destination/Titan.jsx'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/destination' element={<DestinationLayout />}>
						<Route index element={<Moon />} />
						<Route path='/destination/mars' element={<Mars />} />
						<Route
							path='/destination/europa'
							element={<Europa />}
						/>
						<Route path='/destination/titan' element={<Titan />} />
					</Route>
					<Route path='/crew' element={<Crew />} />
					<Route path='/technology' element={<Technology />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
