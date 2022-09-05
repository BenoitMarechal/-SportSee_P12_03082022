import './aside.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import yoga from '../../Assets/icons/activities/yoga.png';
import swim from '../../Assets/icons/activities/Swimming.png';
import cycle from '../../Assets/icons/activities/Cycling.png';
import weight from '../../Assets/icons/activities/weight.png';
let logos = [yoga, swim, cycle, weight];

const Aside = () => {
	return (
		<aside className='aside white-on-black'>
			<div className='aside__container'>
				{logos.map((pic) => {
					return (
						<div key={pic}>
							<Link to=''>
								<img
									src={pic}
									alt={pic}
									className='aside__container__logo'></img>
							</Link>
						</div>
					);
				})}
				{/* <Link to={''}>
					<img src={yoga} alt='yoga' className='aside__container__logo' />
				</Link>
				<img src={yoga} alt='yoga' className='aside__container__logo' />
				<img src={yoga} alt='yoga' className='aside__container__logo' />
				<img src={swim} alt='swimming' className='aside__container__logo' />
				<img src={cycle} alt='cycling' className='aside__container__logo' />
				<img
					src={weight}
					alt='weightlifting'
					className='aside__container__logo'
				/>{' '} */}
			</div>

			<div className='aside__copyright'>Copyright, Sportsee 2020</div>
		</aside>
	);
};

export default Aside;
