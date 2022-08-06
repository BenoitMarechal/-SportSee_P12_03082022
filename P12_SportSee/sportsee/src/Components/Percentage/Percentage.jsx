import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
	{ name: 'Group A', value: 400 },
	{ name: 'Group B', value: 300 },
	{ name: 'Group C', value: 300 },
	{ name: 'Group D', value: 200 },
];
const backgroundColor = '#FFF15';
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

	console.log(formatedProps);

	return (
		<PieChart width={800} height={400}>
			<Pie
				data={formatedProps}
				cx={120}
				cy={200}
				innerRadius={60}
				outerRadius={80}
				//fill='#8884d8'
				fill={backgroundColor}
				paddingAngle={5}
				dataKey='value'>
				{data.map((entry, index) => (
					// <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
