import mars from '../../assets/destination/image-mars.png'

export default function Mars() {
	return (
		<div className='destination'>
			<section>
				<img
					className='destination-img'
					src={mars}
					alt='picture of the mars'
				/>
			</section>
			<section className='destination-info'>
				<h1>MARS</h1>
				<p>
					Don’t forget to pack your hiking boots. You’ll need them to
					tackle Olympus Mons, the tallest planetary mountain in our
					solar system. It’s two and a half times the size of Everest!
				</p>
				<hr />
				<div className='sub-info'>
					<div>
						<h3>AVG DISTANCE</h3>
						<h4>225 MIL. KM</h4>
					</div>
					<div>
						<h3>EST. TRAVEL TIME</h3>
						<h4>9 MONTHS</h4>
					</div>
				</div>
			</section>
		</div>
	)
}
