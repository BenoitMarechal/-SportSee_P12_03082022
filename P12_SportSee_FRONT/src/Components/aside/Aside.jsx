import './aside.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import yoga from '../../Assets/icons/activities/yoga.png';
import swim from '../../Assets/icons/activities/Swimming.png';
import cycle from '../../Assets/icons/activities/Cycling.png';
import weight from '../../Assets/icons/activities/weight.png';
let logos = [yoga, swim, cycle, weight];

/**Aside React component returns the page's aside
 *@public
 */

const Aside = () => {
	return (
		<aside className=' aside white-on-black'>
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
			</div>

			<div className='aside__copyright'>Copyright, Sportsee 2020</div>
		</aside>
	);
};

export default Aside;
