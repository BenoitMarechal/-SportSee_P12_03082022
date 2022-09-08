import localdata from '../localdata.js';
import Main from '../../Components/classes/Main.js';

/**
 *This function will get the mocked Main data and return an object through Main Class
 * @param {number} id is the user's id
 * @param {Function} setMain allows to modify 'Main' in the Profile.jsx page
 * @returns {Object} returns an Main object through Main Class
 */

function getMockedMain(id, setMain) {
	let userId = parseInt(id);
	setMain(
		new Main(localdata.USER_MAIN_DATA.find((element) => element.id === userId))
	);
}

/**
 *This async function will fetch the Main from backend server data and return an object through Main Class
 * @param {number} id is the user's id
 * @param {Function} setMain allows to modify 'Main' in the Profile.jsx page
 *  @param {Function} setErrMain allows to modify the 'error' parameter in the Profile.jsx page
 * @returns {Object} returns an Main object through Main Class
 */

async function fetchMain(id, setMain, setErrMain) {
	try {
		const response = await fetch('http://localhost:3000/user/' + id);
		const result = await response.json();
		setMain(new Main(result.data));
	} catch (err) {
		console.log(err);
		setErrMain(err);
	} finally {
		//	console.log('Main fetch completed');
	}
}

/**
 *This async function will fetch the Main from backend server data and return an object through Main Class
 * @param {number} id is the user's id
 * @param {Function} setMain allows to modify 'Main' in the Profile.jsx page
 * @param {Function} setMainLoading allows to modify 'MainLoading' in the Profile.jsx page
 * @param {string} env determines if the environment is "api" or 'dev'
 *  @param {Function} setErrMain allows to modify the 'error' parameter in the Profile.jsx page
 * @returns {Object} returns an Main object through Main Class by ruynning the adequate function
 */

export async function selectMainSource(
	id,
	setMain,
	env,
	setMainLoading,
	setErrMain
) {
	setMainLoading(true);
	if (env === 'dev') {
		getMockedMain(id, setMain);
	} else {
		await fetchMain(id, setMain, setErrMain);
	}
	setMainLoading(false);
}
