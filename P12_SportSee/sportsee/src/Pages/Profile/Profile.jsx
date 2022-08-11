import React from 'react';
import Header from '../../Components/header/Header';
import { useParams } from 'react-router';
import localdata from '../../Assets/localdata.js';
import Aside from '../../Components/aside/Aside';
import './profile.scss';
import WeightAndCalories from '../../Components/WeightAndCalories/WeightAndCalories';
import Performance from '../../Components/Performance/Performance';
import AverageDuration from '../../Components/AverageDuration/AverageDuration';
import Percentage from '../../Components/Percentage/Percentage';
import GlobalData from '../../Components/GlobalData/GlobalData';

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
	// console.log('userAvg');
	// console.log(userAvg);
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
				<Aside className='container__aside'></Aside>
				<div className='container__content'>
					<div className='container__content__landing'>
						<h1 className='container__content__landing__h1'>
							Bonjour{' '}
							<span className='red'>{userMain.userInfos.firstName}</span>
						</h1>
						<p className='container__content__landing__txt'>
							Félicitation! Vous avez explosé vos objectifs hier! 👏
						</p>
					</div>
					<div className='container__content__graphics'>
						<div className='container__content__graphics__charts'>
							<div className='container__content__graphics__charts__top'>
								<WeightAndCalories {...userActivity} />
							</div>
							<div className='container__content__graphics__charts__bottom'>
								<AverageDuration {...userAvg} />
								<Performance {...userPerf} />
								<Percentage {...userMain} />
							</div>
						</div>

						<GlobalData {...userMain} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
