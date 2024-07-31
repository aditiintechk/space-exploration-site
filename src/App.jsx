import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Layout from './components/Layout.jsx'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
