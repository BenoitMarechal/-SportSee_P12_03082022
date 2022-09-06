import localdata from '../localdata.js';
import Main from '../../Components/classes/Main.js';

function getMockedMain(id, setMain) {
	let userId = parseInt(id);

	setMain(
		new Main(localdata.USER_MAIN_DATA.find((element) => element.id === userId))
	);
}

async function fetchMain(id, setMain) {
	try {
		const response = await fetch('http://localhost:3000/user/' + id);
		const result = await response.json();
		setMain(new Main(result.data));
	} catch (err) {
		console.log(err);
	} finally {
		console.log('fetch completed');
	}
}

export async function selectMainSource(id, setMain, env, setMainLoading) {
	console.log(env);
	setMainLoading(true);

	if (env === 'dev') {
		getMockedMain(id, setMain);
	} else {
		await fetchMain(id, setMain);
	}
	setMainLoading(false);
}
