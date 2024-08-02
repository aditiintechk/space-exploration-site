import europa from '../../assets/destination/image-europa.png'

export default function Europa() {
	return (
		<div className='destination'>
			<section>
				<img
					className='destination-img'
					src={europa}
					alt='picture of the mars'
				/>
			</section>
			<section className='destination-info'>
				<h1>EUROPA</h1>
				<p>
					The smallest of the four Galilean moons orbiting Jupiter,
					Europa is a winter lover’s dream. With an icy surface, it’s
					perfect for a bit of ice skating, curling, hockey, or simple
					relaxation in your snug wintery cabin.
				</p>
				<hr />
				<div className='sub-info'>
					<div>
						<h3>AVG DISTANCE</h3>
						<h4>628 MIL. KM</h4>
					</div>
					<div>
						<h3>EST. TRAVEL TIME</h3>
						<h4>3 YEARS</h4>
					</div>
				</div>
			</section>
		</div>
	)
}
