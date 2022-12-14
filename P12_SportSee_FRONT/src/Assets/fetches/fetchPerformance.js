import localdata from '../localdata.js';
import Perf from '../../Components/classes/Performance.js';

/**
 *This function will get the mocked Perf data and return an object through Perf Class
 * @param {number} id is the user's id
 * @param {Function} setPerf allows to modify 'Perf' in the Profile.jsx page
 * @returns {Object} returns an Perf object through Perf Class
 */

function getMockedPerformance(id, setPerformance) {
	let userId = parseInt(id);
	setPerformance(
		new Perf(
			localdata.USER_PERFORMANCE.find((element) => element.userId === userId)
		)
	);
}
/**
 *This async function will fetch the Perf from backend server data and return an object through Perf Class
 * @param {number} id is the user's id
 * @param {Function} setPerf allows to modify 'Perf' in the Profile.jsx page
 *  @param {Function} setErrPerf allows to modify the 'error' parameter in the Profile.jsx page
 * @returns {Object} returns an Perf object through Perf Class
 */

async function fetchPerformance(id, setPerformance, setErrPerformance) {
	try {
		const response = await fetch(
			'http://localhost:3000/user/' + id + '/performance'
		);
		const result = await response.json();
		setPerformance(new Perf(result.data));
	} catch (err) {
		console.log(err);
		setErrPerformance(err);
	} finally {
		//	console.log('Performance fetch completed');
	}
}

/**
 *This async function will fetch the Perf from backend server data and return an object through Perf Class
 * @param {number} id is the user's id
 * @param {Function} setPerf allows to modify 'Perf' in the Profile.jsx page
 * @param {Function} setPerfLoading allows to modify 'PerfLoading' in the Profile.jsx page
 * @param {string} env determines if the environment is "api" or 'dev'
 *  @param {Function} setErrPerf allows to modify the 'error' parameter in the Profile.jsx page
 * @returns {Object} returns an Perf object through Perf Class by ruynning the adequate function
 */

export async function selectPerformanceSource(
	id,
	setPerformance,
	env,
	setPerformanceLoading,
	setErrPerformance
) {
	setPerformanceLoading(true);
	if (env === 'dev') {
		getMockedPerformance(id, setPerformance);
	} else {
		await fetchPerformance(id, setPerformance, setErrPerformance);
	}
	setPerformanceLoading(false);
}
