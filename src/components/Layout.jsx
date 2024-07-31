import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

export default function Layout() {
	return (
		<div className='site-wrapper'>
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}