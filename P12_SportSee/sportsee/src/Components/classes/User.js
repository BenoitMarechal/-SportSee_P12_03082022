/**User class contains user's main data
 * @param{number} id - id of user
 * @param{object} keyData - data about calories, carbohydrates, lipids and protein
 * @param{object} userInfo - age, first and last name
 * @param{number} score OR todayScore - daily score of user
 */

export default class User {
	constructor(user) {
		this.id = user.id;
		this.keyData = user.keyData;
		this.userInfos = user.userInfos;
		this.todayScore = user.todayScore;
		this.score = user.score;
	}
}
