import titan from '../../assets/destination/image-titan.png'

export default function Titan() {
	return (
		<div className='destination'>
			<section>
				<img
					className='destination-img'
					src={titan}
					alt='picture of the mars'
				/>
			</section>
			<section className='destination-info'>
				<h1>TITAN</h1>
				<p>
					The only moon known to have a dense atmosphere other than
					Earth, Titan is a home away from home (just a few hundred
					degrees colder!). As a bonus, you get striking views of the
					Rings of Saturn.
				</p>
				<hr />
				<div className='sub-info'>
					<div>
						<h3>AVG DISTANCE</h3>
						<h4>1.6 BIL. KM</h4>
					</div>
					<div>
						<h3>EST. TRAVEL TIME</h3>
						<h4>7 YEARS</h4>
					</div>
				</div>
			</section>
		</div>
	)
}
