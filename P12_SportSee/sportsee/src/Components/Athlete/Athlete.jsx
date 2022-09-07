import React from 'react';
import { Link } from 'react-router-dom';
import './Athlete.scss';
import PropTypes from 'prop-types';

const Athlete = (user) => {
	return (
		<Link to={'profile/' + user.id} className='athlete' key={user.id}>
			{user.userInfos.firstName} {user.userInfos.lastName}
		</Link>
	);
};
Athlete.propTypes = {
	user: PropTypes.object,
};

export default Athlete;
