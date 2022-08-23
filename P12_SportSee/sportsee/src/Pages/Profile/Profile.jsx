/// message api indsponible dans la page avec header etc
//message d'accueil selon objectifs
////classe pour données
/// vérifier la condition data loading lorsque l'API est coupée.

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
	const [dataLoading, setDataLoading] = useState(true);
	let mainUrl = 'http://localhost:3000/user/' + id;
	////////////////////////////////////////////////////////
	const [backActivity, setBackActivity] = useState({});
	const [activityLoading, setActivityLoading] = useState(true);
	const activityUrl = 'http://localhost:3000/user/' + id + '/activity';
	////////////////////////////////////////////////////
	const [backAverage, setBackAverage] = useState({});
	const [averageLoading, setAverageLoading] = useState(true);
	let averageUrl = 'http://localhost:3000/user/' + id + '/average-sessions';
	/////////////////////////////////////////////////////////////////
	const [backPerf, setBackPerf] = useState({});
	const [perfLoading, setPerfLoading] = useState(true);
	let perfUrl = 'http://localhost:3000/user/' + id + '/performance';

	//fetch main
	useEffect(() => {
		setDataLoading(true);
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
		setAverageLoading(true);
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
		setPerfLoading(true);
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
							disponibilité de l'API
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
									<div className='load'>LOADING</div>
								) : (
									<WeightAndCalories {...userActivity} />
								)}
							</div>
							<div className='container__content__graphics__charts__bottom'>
								{averageLoading === true ? (
									<div className='load'>LOADING</div>
								) : (
									<AverageDuration {...userAvg} />
								)}
								{perfLoading === true ? (
									<div className='load'>LOADING</div>
								) : (
									<Performance {...userPerf} />
								)}

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
