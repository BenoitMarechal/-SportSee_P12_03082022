////classe pour données

import React, { useEffect, useState } from 'react';
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
	let env = localStorage.environment;
	let { id } = useParams();
	let userId = parseInt(id);
	////////////////////////////////////////////////////
	const [backMain, setBackMain] = useState({});
	const [dataLoading, setDataLoading] = useState(env === 'api' ? true : false);
	let mainUrl = 'http://localhost:3000/user/' + id;
	////////////////////////////////////////////////////////
	const [backActivity, setBackActivity] = useState({});
	const [activityLoading, setActivityLoading] = useState(
		env === 'api' ? true : false
	);
	const activityUrl = 'http://localhost:3000/user/' + id + '/activity';
	////////////////////////////////////////////////////
	const [backAverage, setBackAverage] = useState({});
	const [averageLoading, setAverageLoading] = useState(
		env === 'api' ? true : false
	);
	let averageUrl = 'http://localhost:3000/user/' + id + '/average-sessions';
	/////////////////////////////////////////////////////////////////
	const [backPerf, setBackPerf] = useState({});
	const [perfLoading, setPerfLoading] = useState(env === 'api' ? true : false);
	let perfUrl = 'http://localhost:3000/user/' + id + '/performance';

	//fetch main
	useEffect(() => {
		if (env === 'api') setDataLoading(true);
		fetch(mainUrl)
			.then((response) => response.json())
			.then(({ data }) => {
				setBackMain(data);
				setDataLoading(false);
			});
	}, [mainUrl]);

	const mockedMain = localdata.USER_MAIN_DATA.find(
		(element) => element.id === userId
	);
	const userMain = env === 'dev' ? mockedMain : backMain;
	console.log(userMain);

	useEffect(() => {
		if (env === 'api') setAverageLoading(true);
		fetch(averageUrl)
			.then((response) => response.json())
			.then(({ data }) => {
				setBackAverage(data);
				setAverageLoading(false);
			});
	}, []);

	//console.log(backAverage);
	const mockedAvg = localdata.USER_AVERAGE_SESSIONS.find(
		(element) => element.userId === userId
	);
	const userAvg = env === 'dev' ? mockedAvg : backAverage;
	// const userAvg = env === 'dev' ? mockedAvg : backAverage;
	// 	(element) => element.userId === userId
	// );
	// console.log('userAvg');
	// console.log(userAvg);

	///Fetch Activity

	useEffect(() => {
		if (env === 'api')
			//console.log(activityLoading);
			setActivityLoading(true);
		//console.log(activityLoading);
		fetch(activityUrl)
			.then((response) => response.json())
			.then(({ data }) => {
				setBackActivity(data);
				setActivityLoading(false);
				//console.log(activityLoading);
			});
	}, []);
	//console.log(activityLoading);
	//console.log(backActivity);
	const mockedActivity = localdata.USER_ACTIVITY.find(
		(element) => element.userId === userId
	);
	const userActivity = env === 'dev' ? mockedActivity : backActivity;
	//const userActivity = mockedActivity;
	// console.log('userActivity');
	// console.log(userActivity.sessions);

	/////////////////////////////////////////////////////////
	//fecth perf
	useEffect(() => {
		if (env === 'api') setPerfLoading(true);
		fetch(perfUrl)
			.then((response) => response.json())
			.then(({ data }) => {
				setBackPerf(data);
				setPerfLoading(false);
			});
	}, []);
	//console.log(backPerf);

	const mockedPerf = localdata.USER_PERFORMANCE.find(
		(element) => element.userId === userId
	);

	const userPerf = env === 'dev' ? mockedPerf : backPerf;
	//const userPerf = mockedPerf;
	// console.log('userPerf');
	// console.log(userPerf);
	/////////////////////////////////////////

	return dataLoading === true ? (
		<div className='profile page'>
			<Header></Header>
			<div className='container'>
				<Aside className='container__aside'></Aside>
				<div className='container__content'>
					<div className='container__content__landing'>
						<h1 className='container__content__landing__h1'>
							Chargement... si la page ne s'affiche pas, veuillez vérifier la
							disponibilité de l'API ou utiliser les données mockées
						</h1>
					</div>
				</div>
			</div>
		</div>
	) : (
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
							{userMain.todayScore > 0.25 || userMain.score > 0.25
								? 'Félicitation! Vous avez explosé vos objectifs hier! 👏 '
								: 'Vous êtes un peu en dessous de vos objectifs, encore un effort! ✌ '}
						</p>
					</div>
					<div className='container__content__graphics'>
						<div className='container__content__graphics__charts'>
							<div className='container__content__graphics__charts__top'>
								{activityLoading === true ? (
									''
								) : (
									<WeightAndCalories {...userActivity} />
								)}
							</div>
							<div className='container__content__graphics__charts__bottom'>
								{averageLoading === true ? (
									''
								) : (
									<AverageDuration {...userAvg} />
								)}
								{perfLoading === true ? '' : <Performance {...userPerf} />}

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
