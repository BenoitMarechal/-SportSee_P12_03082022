import localdata from '../localdata.js';
import Activity from '../../Components/classes/Activity.js';

function getMockedActivity(id, setActivity) {
	let userId = parseInt(id);
	setActivity(
		new Activity(
			localdata.USER_ACTIVITY.find((element) => element.userId === userId)
		)
	);
}

async function fetchActivity(id, setActivity, setErrActivity) {
	try {
		const response = await fetch(
			'http://localhost:3000/user/' + id + '/activity'
		);
		const result = await response.json();
		setActivity(new Activity(result.data));
	} catch (err) {
		console.log(err);
		setErrActivity(err);
	} finally {
		//console.log('Activity fetch completed');
	}
}

export async function selectActivitySource(
	id,
	setActivity,
	env,
	setActivityLoading,
	setErrActivity
) {
	setActivityLoading(true);
	if (env === 'dev') {
		getMockedActivity(id, setActivity);
	} else {
		await fetchActivity(id, setActivity, setErrActivity);
	}
	setActivityLoading(false);
}
