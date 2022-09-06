// import React, { useEffect, useState } from 'react';
// import Header from '../../Components/header/Header';
// import { useParams } from 'react-router';
import localdata from '../Assets/localdata.js';
import User from '../Components/classes/User.js';
// import Aside from '../../Components/aside/Aside';
// import './profile.scss';
// import WeightAndCalories from '../../Components/WeightAndCalories/WeightAndCalories';
// import Performance from '../../Components/Performance/Performance';
// import AverageDuration from '../../Components/AverageDuration/AverageDuration';
// import Percentage from '../../Components/Percentage/Percentage';
// import GlobalData from '../../Components/GlobalData/GlobalData';
// import User from '../../Components/classes/User.js';
// import Activity from '../../Components/classes/Activity.js';
// import Duration from '../../Components/classes/Duration';
// import Perf from '../../Components/classes/Perf';

//function formatMain(object) {}

function getMockedMain(id, setApiMain) {
	setApiMain(localdata.USER_MAIN_DATA.find((element) => element.id === id));
}
// const mockedMain = localdata.USER_MAIN_DATA.find(
// 	(element) => element.id === id
// );

export async function fetchMain(id, setApiMain) {
	//console.log(id);
	//const env = localStorage.environment;
	try {
		const response = await fetch('http://localhost:3000/user/' + id);
		const result = await response.json();
		setApiMain(result.data);
	} catch (err) {
		console.log(err);
	} finally {
		console.log('fetch completed');
	}
}

export async function selectMainSource(id, setApiMain, env) {
	console.log(env);
	if (env === 'dev') {
		getMockedMain(id, setApiMain);
	} else {
		await fetchMain(id, setApiMain);
	}
}
