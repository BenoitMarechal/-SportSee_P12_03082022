import './Percentage.scss';
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
const backgroundColor = '##FF08';
const COLORS = ['#FF0000', backgroundColor];

const Percentage = (props) => {
	let score = props.todayScore ? props.todayScore * 100 : props.score * 100;

	let formatedProps = [
		{
			name: 'goals',
			value: score,
		},
		{ name: 'scale', value: 100 - score },
	];

	return (
		<div className='pieChart__container'>
			<div className='pieChart__container__title'>Score</div>

			<PieChart width={258} height={263} top={0}>
				<Pie
					data={formatedProps}
					cx={'50%'}
					cy={'50%'}
					innerRadius={80}
					outerRadius={90}
					startAngle={90}
					endAngle={450}
					fill={backgroundColor}
					cornerRadius={5}
					paddingAngle={0}
					dataKey='value'>
					{formatedProps.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={index === 0 ? COLORS[index % COLORS.length] : 'none'}
						/>
					))}
				</Pie>
			</PieChart>
			<div className='pieChart__container__text'>
				<div className='pieChart__container__text__score'>{score}%</div>

				<span className='pieChart__container__text__small'>
					de votre objectif
				</span>
			</div>
		</div>
	);
};

export default Percentage;
