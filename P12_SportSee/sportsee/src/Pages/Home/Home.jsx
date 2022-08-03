import React from 'react';
import Header from '../../Components/header/Header';
import localdata from '../../Assets/localdata.js';
import Athlete from '../../Components/Athlete/Athlete';

const Home = () => {
	console.log(localdata);
	return (
		<div className='home page'>
			<Header></Header>
			<div className='container'>
				<h1>Test users:</h1>
				{localdata.USER_MAIN_DATA.map((user) => {
					return <Athlete {...user} key={user.id} />;
				})}
			</div>
		</div>
	);
};

export default Home;
