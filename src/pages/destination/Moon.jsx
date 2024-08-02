import moon from '../../assets/destination/image-moon.png'

export default function Moon() {
	return (
		<div className='destination'>
			<section>
				<img
					className='destination-img'
					src={moon}
					alt='picture of the moon'
				/>
			</section>
			<section className='destination-info'>
				<h1>MOON</h1>
				<p>
					See our planet as you’ve never seen it before. A perfect
					relaxing trip away to help regain perspective and come back
					refreshed. While you’re there, take in some history by
					visiting the Luna 2 and Apollo 11 landing sites.
				</p>
				<hr />
				<div className='sub-info'>
					<div>
						<h3>AVG DISTANCE</h3>
						<h4>384,400 KM</h4>
					</div>
					<div>
						<h3>EST. TRAVEL TIME</h3>
						<h4>3 DAYS</h4>
					</div>
				</div>
			</section>
		</div>
	)
}
