import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
const backgroundColor = '##FF08';
const COLORS = ['	#FF0000', backgroundColor];

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
		<PieChart width={280} height={400}>
			<Pie
				data={formatedProps}
				cx={120}
				cy={200}
				innerRadius={60}
				outerRadius={80}
				fill={backgroundColor}
				paddingAngle={5}
				dataKey='value'>
				{formatedProps.map((entry, index) => (
					<Cell
						key={`cell-${index}`}
						fill={index === 0 ? COLORS[index % COLORS.length] : 'none'}
					/>
				))}
			</Pie>
		</PieChart>
	);
};

export default Percentage;
