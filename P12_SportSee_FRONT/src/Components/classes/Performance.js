let kindTranslation = {
	cardio: 'Cardio',
	energy: 'Energie',
	endurance: 'Endurance',
	strength: 'Force',
	speed: 'Vitesse',
	intensity: 'Intensité',
};
let revert = {
	1: 5,
	2: 6,
	3: 1,
	4: 2,
	5: 3,
	6: 4,
};

/**Perf class contains user's sessions data
 * @param {number} userId - id of user
 * @param {array} data - data about user's scores in different fields of performance
 * @param {Obj.ect} kind - establishes the correspondance between difference fields of performance described in data array
 */
export default class Perf {
	constructor(perf) {
		this.userId = perf.userId;
		this.data = perf.data.map((element) => ({
			value: element.value,
			kind: kindTranslation[perf.kind[revert[element.kind]]],
		}));
		this.kind = perf.kind;
	}
}
