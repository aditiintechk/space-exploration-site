import logo from '../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
	const activeStyles = {
		borderBottom: '2px solid #fff',
		transform: 'scaleX(1.1)',
		transition: 'transform 0.5s ease',
	}
	return (
		<header>
			<Link to='/'>
				<img src={logo} alt='logo' className='logo' />
			</Link>
			<nav>
				<ul className='nav-items'>
					<NavLink
						to='.'
						className='item'
						style={({ isActive }) =>
							isActive ? activeStyles : null
						}
					>
						<span>00</span> HOME
					</NavLink>
					<NavLink
						to='destination'
						className='item'
						style={({ isActive }) =>
							isActive ? activeStyles : null
						}
					>
						<span>01</span> DESTINATION
					</NavLink>
				</ul>
			</nav>
		</header>
	)
}
