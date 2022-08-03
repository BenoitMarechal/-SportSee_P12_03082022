import React from 'react';
import yoga from '../../Assets/icons/activities/yoga.png';
import swim from '../../Assets/icons/activities/Swimming.png';
import cycle from '../../Assets/icons/activities/Cycling.png';
import weight from '../../Assets/icons/activities/weight.png';
import './aside.scss';

const Aside = () => {
	return (
		<aside className='aside white-on-black'>
			<img src={yoga} alt='yoga' />
			<img src={swim} alt='swimming' />
			<img src={cycle} alt='cycling' />
			<img src={weight} alt='weightlifting' />
		</aside>
	);
};

export default Aside;
