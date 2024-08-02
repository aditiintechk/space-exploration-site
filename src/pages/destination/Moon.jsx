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
					Let's face it; if you want to go to space, you might as well
					genuinely go to outer space and not hover kind of on the
					edge of it. Well sit back, and relax because we'll give you
					a truly out of this world experience!
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
