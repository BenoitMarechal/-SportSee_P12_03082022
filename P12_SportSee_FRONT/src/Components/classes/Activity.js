/**Activity class contains user's sessions data
 *
 * @param{number} userId - id of user
 * @param{Object} sessions - data about user's weight and calories burnt duraing last seven days' sessions.
 */

export default class Activity {
	constructor(activity) {
		this.userId = activity.userId;
		this.sessions = activity.sessions.map((session) => ({
			day: session.day.toString().slice(-1),
			kilogram: session.kilogram,
			calories: session.calories,
		}));
	}
}
