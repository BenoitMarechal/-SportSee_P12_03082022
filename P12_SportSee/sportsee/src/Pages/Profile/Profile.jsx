import React from 'react';
import Header from '../../Components/header/Header';
import { useParams } from 'react-router';

const Profile = (user) => {
	console.log(useParams());
	let { id } = useParams();
	console.log(id);
	return (
		<div className='profile page'>
			<Header></Header>
			{/* <div className='container'>{user.userInfos.firstName}</div> */}
		</div>
	);
};

export default Profile;
