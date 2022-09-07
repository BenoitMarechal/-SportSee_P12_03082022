import React, { useEffect, useState } from 'react';
import Header from '../../Components/header/Header';
import { useParams } from 'react-router';
import './profile.scss';
import Aside from '../../Components/aside/Aside';

import WeightAndCalories from '../../Components/WeightAndCalories/WeightAndCalories';
import Performance from '../../Components/Performance/Performance';
import AverageDuration from '../../Components/AverageDuration/AverageDuration';
import Percentage from '../../Components/Percentage/Percentage';
import GlobalData from '../../Components/GlobalData/GlobalData';
import { selectMainSource } from '../../Assets/fetches/fetchMain';
import { selectActivitySource } from '../../Assets/fetches/fetchActivity';
import { selectDurationSource } from '../../Assets/fetches/fetchDuration';
import { selectPerformanceSource } from '../../Assets/fetches/fetchPerformance';

//documenter avec proptypes
//readme md

const Profile = () => {
	/////// Environment parameters
	let env = localStorage.environment;
	let { id } = useParams();
	//////////////////////////
	//fetching Main data
	const [main, setMain] = useState({});
	const [mainLoading, setMainLoading] = useState(true);
	const [errMain, setErrMain] = useState(false);
	useEffect(() => {
		selectMainSource(id, setMain, env, setMainLoading, setErrMain);
	}, []);
	//////////////////////////
	//fetching activity data
	const [activity, setActivity] = useState({});
	const [activityLoading, setActivityLoading] = useState(false);
	const [errActivity, setErrActivity] = useState(false);
	useEffect(() => {
		selectActivitySource(
			id,
			setActivity,
			env,
			setActivityLoading,
			setErrActivity
		);
	}, []);

	////// AVERAGE DURATION
	//fetching Duration data
	const [duration, setDuration] = useState({});
	const [durationLoading, setDurationLoading] = useState(false);
	const [errDuration, setErrDuration] = useState(false);
	useEffect(() => {
		selectDurationSource(
			id,
			setDuration,
			env,
			setDurationLoading,
			setErrDuration
		);
	}, []);
	////////////////////////
	////// PERFORMANCE
	//fetching Performance data
	const [performance, setPerformance] = useState({});
	const [performanceLoading, setPerformanceLoading] = useState(false);
	const [errPerformance, setErrPerformance] = useState(false);
	useEffect(() => {
		selectPerformanceSource(
			id,
			setPerformance,
			env,
			setPerformanceLoading,
			setErrPerformance
		);
	}, []);

	return mainLoading === true || errMain !== false ? (
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
						<p>Error status: {errMain.toString()}</p>
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
							Bonjour <span className='red'>{main.userInfos.firstName}</span>
						</h1>
						<p className='container__content__landing__txt'>
							{main.todayScore > 25 || main.score > 25
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
									<WeightAndCalories {...activity} />
								)}
							</div>
							<div className='container__content__graphics__charts__bottom'>
								{durationLoading === true ? (
									''
								) : (
									<AverageDuration {...duration} />
								)}
								{performanceLoading === true ? (
									''
								) : (
									<Performance {...performance} />
								)}

								<Percentage {...main} />
							</div>
						</div>
						<GlobalData {...main} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
