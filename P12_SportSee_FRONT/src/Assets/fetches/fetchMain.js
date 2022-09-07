import localdata from '../localdata.js';
import Main from '../../Components/classes/Main.js';

function getMockedMain(id, setMain) {
	let userId = parseInt(id);
	setMain(
		new Main(localdata.USER_MAIN_DATA.find((element) => element.id === userId))
	);
}

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
