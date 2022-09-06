/**User class contains user's main data
 * @param{number} id - id of user
 * @param{object} keyData - data about calories, carbohydrates, lipids and protein
 * @param{object} userInfo - age, first and last name
 * @param{number} score OR todayScore - daily score of user
 */

//  const WeightAndCalories = (props) => {
// 	//console.log('props');
// 	//console.log(props);
// 	let formatedProps = props.sessions.map((session) => ({
// 		day: session.day.toString().slice(-1),
// 		kilogram: session.kilogram,
// 		calories: session.calories,
// 	}));

// let score = props.todayScore ? props.todayScore * 100 : props.score * 100;

// 	let formatedProps = [
// 		{
// 			name: 'goals',
// 			value: score,
// 		},
// 		{ name: 'scale', value: 100 - score },
// 	];

export default class User {
	constructor(user) {
		this.id = user.id;
		this.keyData = user.keyData;
		this.userInfos = user.userInfos;
		if (user.todayScore) {
			this.score = user.todayScore * 100;
		} else {
			this.score = user.score * 100;
		}
		this.percentage = [
			{
				name: 'goals',
				value: this.score,
			},
			{ name: 'scale', value: 100 - this.score },
		];
	}
}
