import React from 'react';
import { Link } from 'react-router-dom';
import './Athlete.scss';
// function clickDev() {
// 	localStorage.setItem('environment', 'devYeah');
// }

const Athlete = (user) => {
	return (
		// <div className='container__athletes__container'>
		<Link
			to={'profile/' + user.id}
			className='athlete'
			key={user.id}
			//onClick={clickDev}
		>
			{user.userInfos.firstName} {user.userInfos.lastName}
		</Link>
		// </div>
	);
};

export default Athlete;
