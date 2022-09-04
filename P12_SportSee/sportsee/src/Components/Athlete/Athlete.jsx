import React from 'react';
import { Link } from 'react-router-dom';
import './Athlete.scss';

const Athlete = (user) => {
	return (
		<Link to={'profile/' + user.id} className='athlete' key={user.id}>
			{user.userInfos.firstName} {user.userInfos.lastName}
		</Link>
	);
};

export default Athlete;
