/**Duration class contains user's sessions data
 * @param{number} userId - id of user
 * @param{array} sessions - data about duration of user's last seven sessions
 */

export default class Duration {
	constructor(duration) {
		this.userId = duration.userId;
		this.sessions = duration.sessions;
	}
}
