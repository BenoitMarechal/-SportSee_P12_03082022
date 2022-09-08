/**User class contains user's main data
 * @param{number} id - id of user
 * @param{Object} keyData - data about calories, carbohydrates, lipids and protein
 * @param{Object} userInfo - age, first and last name
 * @param{number} score OR todayScore - daily score of user
 */

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
