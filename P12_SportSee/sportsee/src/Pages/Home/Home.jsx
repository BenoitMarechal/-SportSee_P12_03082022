import React from 'react';
import Header from '../../Components/header/Header';
import localdata from '../../Assets/localdata.js';
import Athlete from '../../Components/Athlete/Athlete';

function clickDev() {
	localStorage.setItem('environment', 'dev');
}
function clickAPI() {
	localStorage.setItem('environment', 'api');
}

const Home = () => {
	return (
		<div className='home page'>
			<Header></Header>
			{/* MOCKED DATA */}
			<div className='homeContainer'>
				<div className='homeContainer__athletes'>
					<h2>Test users (mocked data):</h2>
					<div
						className='homeContainer__athletes__container'
						onClick={clickDev}>
						{localdata.USER_MAIN_DATA.map((user) => {
							return <Athlete {...user} key={user.id} />;
						})}
					</div>
				</div>
				{/* BACKEND DATA */}
				<div className='homeContainer__athletes'>
					<h2>Test users (backend data):</h2>
					<div
						className='homeContainer__athletes__container'
						onClick={clickAPI}>
						{localdata.USER_MAIN_DATA.map((user) => {
							return <Athlete {...user} key={user.id} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
