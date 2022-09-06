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
import User from '../../Components/classes/User.js';
import Activity from '../../Components/classes/Activity.js';
import Duration from '../../Components/classes/Duration';
import Perf from '../../Components/classes/Perf';
import { selectMainSource } from '../../Assets/fetchApi';

//documenter avec proptypes
//readme md

const Profile = () => {
	/////// Environment parameters
	let env = localStorage.environment;
	let { id } = useParams();
	let userId = parseInt(id);
	//fetchMain(id);

	////////////////////////////  Fetching
	////////////// MAIN
	////////declaring constants
	const [backMain, setBackMain] = useState({});
	const [apiMain, setApiMain] = useState(null);
	const [dataLoading, setDataLoading] = useState(env === 'api' ? true : false);
	let mainUrl = 'http://localhost:3000/user/' + id;
	//////fetching (api)
	//////////////////////////////////////////////////////////////////
	useEffect(() => {
		setDataLoading(true);
		selectMainSource(userId, setApiMain, env);
		setDataLoading(false);
	}, []);
	console.log(apiMain);

	useEffect(() => {
		if (env === 'api') setDataLoading(true);
		fetch(mainUrl)
			.then((response) => response.json())
			.then(({ data }) => {
				setBackMain(data);
				setDataLoading(false);
			});
	}, [env, mainUrl]);
	///////////////////////////////////////////////////////////////////////////////
	//////declaring mocked data
	const mockedMain = localdata.USER_MAIN_DATA.find(
		(element) => element.id === userId
	);
	//////chosing between mocked and api data
	const userMain = env === 'dev' ? mockedMain : backMain;
	//console.log(userMain);
	//let userMain = apiMain;

	// iterate class
	let CurrentUser = new User(userMain);
	console.log(CurrentUser);

	/////// ACTIVITY
	///const
	const [backActivity, setBackActivity] = useState({});
	const [activityLoading, setActivityLoading] = useState(
		env === 'api' ? true : false
	);
	const activityUrl = 'http://localhost:3000/user/' + id + '/activity';
	/////fetch
	useEffect(() => {
		if (env === 'api') setActivityLoading(true);
		fetch(activityUrl)
			.then((response) => response.json())
			.then(({ data }) => {
				setBackActivity(data);
				setActivityLoading(false);
			});
	}, [activityUrl, env]);

	const mockedActivity = localdata.USER_ACTIVITY.find(
		(element) => element.userId === userId
	);
	const userActivity = env === 'dev' ? mockedActivity : backActivity;

	let CurrentActivity = new Activity(userActivity);

	////// AVERAGE DURATION
	const [backAverage, setBackAverage] = useState({});
	const [averageLoading, setAverageLoading] = useState(
		env === 'api' ? true : false
	);
	let averageUrl = 'http://localhost:3000/user/' + id + '/average-sessions';
	useEffect(() => {
		if (env === 'api') setAverageLoading(true);
		fetch(averageUrl)
			.then((response) => response.json())
			.then(({ data }) => {
				setBackAverage(data);
				setAverageLoading(false);
			});
	}, [averageUrl, env]);

	const mockedAvg = localdata.USER_AVERAGE_SESSIONS.find(
		(element) => element.userId === userId
	);
	const userAvg = env === 'dev' ? mockedAvg : backAverage;
	let CurrentDuration = new Duration(userAvg);

	/////  PERFORMANCE
	const [backPerf, setBackPerf] = useState({});
	const [perfLoading, setPerfLoading] = useState(env === 'api' ? true : false);
	let perfUrl = 'http://localhost:3000/user/' + id + '/performance';

	//fecth perf
	useEffect(() => {
		if (env === 'api') setPerfLoading(true);
		fetch(perfUrl)
			.then((response) => response.json())
			.then(({ data }) => {
				setBackPerf(data);
				setPerfLoading(false);
			});
	}, [env, perfUrl]);

	const mockedPerf = localdata.USER_PERFORMANCE.find(
		(element) => element.userId === userId
	);
	const userPerf = env === 'dev' ? mockedPerf : backPerf;

	let CurrentPerf = new Perf(userPerf);
	/////////////////////////////////////////
	/// Iterating classes

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
							<span className='red'>{CurrentUser.userInfos.firstName}</span>
						</h1>
						<p className='container__content__landing__txt'>
							{CurrentUser.todayScore > 25 || CurrentUser.score > 25
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
									<WeightAndCalories {...CurrentActivity} />
								)}
							</div>
							<div className='container__content__graphics__charts__bottom'>
								{averageLoading === true ? (
									''
								) : (
									<AverageDuration {...CurrentDuration} />
								)}
								{perfLoading === true ? '' : <Performance {...CurrentPerf} />}

								<Percentage {...CurrentUser} />
							</div>
						</div>
						<GlobalData {...CurrentUser} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
