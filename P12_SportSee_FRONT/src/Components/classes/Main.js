import caloriesIcon from '../../Assets/icons/nutrition/calories-icon.png';
import carbsIcon from '../../Assets/icons/nutrition/carbs-icon.png';
import fatIcon from '../../Assets/icons/nutrition/fat-icon.png';
import proteinIcon from '../../Assets/icons/nutrition/protein-icon.png';

/**
 * Main class contains user's main data
 * @param{number} id - id of user
 * @param{object} keyData - data about calories, carbohydrates, lipids and protein
 * @param{object} userInfo - age, first and last name
 * @param{number} score OR todayScore - daily score of user
 */

export default class Main {
	constructor(user) {
		this.id = user.id;
		this.keyData = [
			{
				icon: caloriesIcon,
				unit: 'kCal',
				label: 'Calories',
				amount: user.keyData.calorieCount,
			},
			{
				icon: proteinIcon,
				unit: 'g',
				label: 'Proteines',
				amount: user.keyData.proteinCount,
			},
			{
				icon: carbsIcon,
				unit: 'g',
				label: 'Glucides',
				amount: user.keyData.carbohydrateCount,
			},
			{
				icon: fatIcon,
				unit: 'g',
				label: 'Lipides',
				amount: user.keyData.lipidCount,
			},
		];
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
