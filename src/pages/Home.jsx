import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div className='home-container'>
			<section className='home-info'>
				<h2>SO, YOU WANT TO TRAVEL TO</h2>
				<h1>SPACE</h1>
				<p>
					Let's face it; if you want to go to space, you might as well
					genuinely go to outer space and not hover kind of on the
					edge of it. Well sit back, and relax because we'll give you
					a truly out of this world experience!
				</p>
			</section>
			<section className='home-explore'>
				<Link to='/destination' className='explore-btn'>
					EXPLORE
				</Link>
			</section>
		</div>
	)
}
