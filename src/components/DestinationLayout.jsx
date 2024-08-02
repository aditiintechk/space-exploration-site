import { NavLink, Outlet } from 'react-router-dom'

export default function DestinationLayout() {
	const activeStyles = {
		borderBottom: '2px solid #fff',
		transform: 'scaleX(1.1)',
		transition: 'transform 0.5s ease',
	}

	return (
		<div className='destination-container'>
			<h2 className='destination-title'>
				<span>01</span> PICK YOUR DESTINATION
			</h2>
			<nav className='destination-nav'>
				<NavLink
					to='.'
					end
					className='item'
					style={({ isActive }) => (isActive ? activeStyles : null)}
				>
					MOON
				</NavLink>
				<NavLink
					to='mars'
					className='item'
					style={({ isActive }) => (isActive ? activeStyles : null)}
				>
					MARS
				</NavLink>
				<NavLink
					to='europa'
					className='item'
					style={({ isActive }) => (isActive ? activeStyles : null)}
				>
					EUROPA
				</NavLink>
				<NavLink
					to='titan'
					className='item'
					style={({ isActive }) => (isActive ? activeStyles : null)}
				>
					TITAN
				</NavLink>
			</nav>
			<Outlet />
		</div>
	)
}
