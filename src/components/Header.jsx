import logo from '../assets/logo.svg'

export default function Header() {
	return (
		<header>
			<img src={logo} alt='logo' className='logo' />
			<nav>
				<ul className='nav-items'>
					<li className='item'>
						<span>00</span> HOME
					</li>
					<li className='item'>
						<span>01</span> DESTINATION
					</li>
					<li className='item'>
						<span>02</span> CREW
					</li>
					<li className='item'>
						<span>03</span> TECHNOLOGY
					</li>
				</ul>
			</nav>
		</header>
	)
}
