import localdata from '../localdata.js';
import Activity from '../../Components/classes/Activity.js';

/**
 *This function will get the mocked activity data and return an object through Activity Class
 * @param {number} id is the user's id
 * @param {Function} setActivity allows to modify 'activity' in the Profile.jsx page
 * @returns {Object} returns an activity object through Activity Class
 */

function getMockedActivity(id, setActivity) {
	let userId = parseInt(id);
	setActivity(
		new Activity(
			localdata.USER_ACTIVITY.find((element) => element.userId === userId)
		)
	);
}
/**
 *This async function will fetch the activity from backend server data and return an object through Activity Class
 * @param {number} id is the user's id
 * @param {Function} setActivity allows to modify 'activity' in the Profile.jsx page
 *  @param {Function} setErrActivity allows to modify the 'error' parameter in the Profile.jsx page
 * @returns {Object} returns an activity object through Activity Class
 */

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
/**
 *This async function will fetch the activity from backend server data and return an object through Activity Class
 * @param {number} id is the user's id
 * @param {Function} setActivity allows to modify 'activity' in the Profile.jsx page
 * @param {Function} setActivityLoading allows to modify 'activityLoading' in the Profile.jsx page
 * @param {string} env determines if the environment is "api" or 'dev'
 *  @param {Function} setErrActivity allows to modify the 'error' parameter in the Profile.jsx page
 * @returns {Object} returns an activity object through Activity Class by ruynning the adequate function
 */

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
