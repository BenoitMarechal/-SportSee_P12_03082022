/**Perf class contains user's sessions data
 * @param{number} userId - id of user
 * @param{array} data - data about user's scores in different fields of performance
 * @param{object} kind - establishes the correspondance between difference fields of performance described in data array
 */

export default class Perf {
	constructor(perf) {
		this.userId = perf.userId;
		this.data = perf.data;
		this.kind = perf.kind;
	}
}
