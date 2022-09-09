import React from 'react';
import Header from '../../Components/header/Header';
import localdata from '../../Assets/localdata.js';
import Athlete from '../../Components/Athlete/Athlete';
import Aside from '../../Components/aside/Aside';
import './Home.scss';

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
			<div className='homeContainer'>
				<Aside />
				<div className='homeContainer__content'>
					{/* MOCKED DATA */}
					<div className='homeContainer__content__athleteContainer'>
						<h2 className='homeContainer__content__athleteContainer__h2'>
							Test users (mocked data):
						</h2>
						<div
							className='homeContainer__content__athleteContainer__row'
							onClick={clickDev}>
							{localdata.USER_MAIN_DATA.map((user) => {
								return <Athlete {...user} key={user.id} />;
							})}
						</div>
					</div>
					{/* API DATA */}
					<div className='homeContainer__content__athleteContainer'>
						<h2 className='homeContainer__content__athleteContainer__h2'>
							Test users (API data):
						</h2>
						<div
							className='homeContainer__content__athleteContainer__row'
							onClick={clickAPI}>
							{localdata.USER_MAIN_DATA.map((user) => {
								return <Athlete {...user} key={user.id} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
