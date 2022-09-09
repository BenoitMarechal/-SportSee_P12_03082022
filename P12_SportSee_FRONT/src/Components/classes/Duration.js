let days = {
	1: 'L',
	2: 'M',
	3: 'M',
	4: 'J',
	5: 'V',
	6: 'S',
	7: 'D',
};

/**Duration class contains user's sessions data
 * @param {number} userId - id of user
 * @param {array} sessions - data about duration of user's last seven sessions
 * @param {array} days
 */
export default class Duration {
	constructor(duration) {
		this.userId = duration.userId;
		this.sessions = duration.sessions.map((element) => ({
			day: days[element.day],
			sessionLength: element.sessionLength,
		}));
	}
}
