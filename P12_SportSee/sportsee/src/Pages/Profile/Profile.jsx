import React from 'react';
import Header from '../../Components/header/Header';
import { useParams } from 'react-router';
import localdata from '../../Assets/localdata.js';
import Aside from '../../Components/aside/Aside';
import './profile.scss';
import WeightAndCalories from '../../Components/WeightAndCalories/WeightAndCalories';
import Performance from '../../Components/Performance/Performance';
import AverageDuration from '../../Components/AverageDuration/AvergaeDuration';

const Profile = () => {
	let { id } = useParams();
	let userId = parseInt(id);
	/////////////////////////////
	const userMain = localdata.USER_MAIN_DATA.find(
		(element) => element.id === userId
	);
	// console.log('userMain');
	// console.log(userMain);
	///////////////////////////
	const userAvg = localdata.USER_AVERAGE_SESSIONS.find(
		(element) => element.userId === userId
	);
	console.log('userAvg');
	console.log(userAvg);
	//////////////////////////////////////////////
	const userActivity = localdata.USER_ACTIVITY.find(
		(element) => element.userId === userId
	);
	// console.log('userActivity');
	// console.log(userActivity.sessions);

	/////////////////////////////////////////////////////////
	const userPerf = localdata.USER_PERFORMANCE.find(
		(element) => element.userId === userId
	);
	// console.log('userPerf');
	// console.log(userPerf);
	/////////////////////////////////////////

	return (
		<div className='profile page'>
			<Header></Header>
			<div className='container'>
				<Aside></Aside>
				<div className='container__content'>
					<h1>
						Bonjour <span className='red'>{userMain.userInfos.firstName}</span>
					</h1>
					<div>
						<WeightAndCalories {...userActivity} />
					</div>
					<Performance {...userPerf} />
					<AverageDuration {...userAvg} />
				</div>
			</div>
		</div>
	);
};

export default Profile;
