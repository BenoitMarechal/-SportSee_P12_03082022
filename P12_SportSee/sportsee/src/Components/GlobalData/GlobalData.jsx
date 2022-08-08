import React from 'react';
import caloriesIcon from '../../Assets/icons/nutrition/calories-icon.png';
import carbsIcon from '../../Assets/icons/nutrition/carbs-icon.png';
import fatIcon from '../../Assets/icons/nutrition/fat-icon.png';
import proteinIcon from '../../Assets/icons/nutrition/protein-icon.png';

const GlobalData = (props) => {
	let formatedProps = [
		{
			icon: caloriesIcon,
			unit: 'kCal',
			label: 'Calories',
			amount: props.keyData.calorieCount,
		},
		{
			icon: proteinIcon,
			unit: 'g',
			label: 'Proteines',
			amount: props.keyData.proteinCount,
		},
		{
			icon: carbsIcon,
			unit: 'g',
			label: 'Glucides',
			amount: props.keyData.carbohydrateCount,
		},
		{
			icon: fatIcon,
			unit: 'g',
			label: 'Lipides',
			amount: props.keyData.lipidCount,
		},
	];
	return (
		<div className='keyData'>
			{formatedProps.map((nutrient) => {
				return (
					<div key={nutrient.label}>
						<img
							className='keyData__img'
							src={nutrient.icon}
							alt={nutrient.label}
						/>
						<div className='keyData__txt'>
							<div className='keyData__txt__amount'>
								{nutrient.amount}
								{nutrient.unit}
							</div>
							<div className='keyData__txt__label'>{nutrient.label}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default GlobalData;
