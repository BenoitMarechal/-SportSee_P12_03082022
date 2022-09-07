import localdata from '../localdata.js';
import Perf from '../../Components/classes/Performance.js';

function getMockedPerformance(id, setPerformance) {
	let userId = parseInt(id);
	setPerformance(
		new Perf(
			localdata.USER_PERFORMANCE.find((element) => element.userId === userId)
		)
	);
}

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
