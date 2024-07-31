import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Destination from './pages/Destination.jsx'
import Crew from './pages/Crew.jsx'
import Technology from './pages/Technology.jsx'
import Layout from './components/Layout.jsx'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/destination' element={<Destination />} />
					<Route path='/crew' element={<Crew />} />
					<Route path='/technology' element={<Technology />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
