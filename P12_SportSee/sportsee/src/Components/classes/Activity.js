/**Activity class contains user's sessions data
 * @param{number} userId - id of user
 * @param{array} sessions - data about user's weight and calories burnt duraing last seven days' sessions.
 */

export default class Activity {
	constructor(activity) {
		this.userId = activity.userId;
		this.sessions = activity.sessions;
	}
}
