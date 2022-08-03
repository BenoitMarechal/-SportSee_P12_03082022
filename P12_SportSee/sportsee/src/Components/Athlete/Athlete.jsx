import React from 'react';
import './Athlete.scss';

const Athlete = (user) => {
	return (
		<div className='Athlete'>
			{user.userInfos.firstName} {user.userInfos.lastName}
		</div>
	);
};

export default Athlete;
