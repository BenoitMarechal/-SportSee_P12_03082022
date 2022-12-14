import localdata from '../localdata.js';
import Duration from '../../Components/classes/Duration.js';

/**
 *This function will get the mocked duration data and return an object through Duration Class
 * @param {number} id is the user's id
 * @param {Function} setDuration allows to modify 'duration' in the Profile.jsx page
 * @returns {Object} returns an Duration object through Duration Class
 */

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

/**
 *This async function will fetch the Duration from backend server data and return an object through Duration Class
 * @param {number} id is the user's id
 * @param {Function} setDuration allows to modify 'duration' in the Profile.jsx page
 *  @param {Function} setErrDuration allows to modify the 'error' parameter in the Profile.jsx page
 * @returns {Object} returns an Duration object through Duration Class
 */

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
	}
}

/**
 *This async function will fetch the Duration from backend server data and return an object through Duration Class
 * @param {number} id is the user's id
 * @param {Function} setDuration allows to modify 'duration' in the Profile.jsx page
 * @param {Function} setDurationLoading allows to modify 'DurationLoading' in the Profile.jsx page
 * @param {string} env determines if the environment is "api" or 'dev'
 *  @param {Function} setErrDuration allows to modify the 'error' parameter in the Profile.jsx page
 * @returns {Object} returns an Duration object through Duration Class by ruynning the adequate function
 */

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
