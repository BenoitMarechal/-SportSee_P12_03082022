import localdata from '../localdata.js';
import Duration from '../../Components/classes/Duration.js';

function getMockedDuration(id, setDuration) {
	let userId = parseInt(id);
	setDuration(
		new Duration(
			localdata.USER_AVERAGE_SESSIONS.find(
				(element) => element.userId === userId
			)
		)
	);
}

async function fetchDuration(id, setDuration, setErrDuration) {
	try {
		const response = await fetch(
			'http://localhost:3000/user/' + id + '/average-sessions'
		);
		const result = await response.json();
		setDuration(new Duration(result.data));
	} catch (err) {
		console.log(err);
		setErrDuration(err);
	} finally {
		//console.log('Duration fetch completed');
	}
}

export async function selectDurationSource(
	id,
	setDuration,
	env,
	setDurationLoading,
	setErrDuration
) {
	setDurationLoading(true);
	if (env === 'dev') {
		getMockedDuration(id, setDuration);
	} else {
		await fetchDuration(id, setDuration, setErrDuration);
	}
	setDurationLoading(false);
}
