import React from 'react';
import './WeightAndCalories.scss';

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className='custom-tooltip'>
				<p className='desc'>{payload[0].value} kg</p>
				<p className='desc'>{payload[1].value} KCal</p>
			</div>
		);
	}

	return null;
};

const WeightAndCalories = (props) => {
	let formatedProps = props.sessions.map((session) => ({
		day: session.day.toString().slice(-1),
		kilogram: session.kilogram,
		calories: session.calories,
	}));
	// console.log(props);
	// console.log(formatedProps);

	return (
		<div className=''>
			<p>Activité quotidienne</p>
			<BarChart
				id='weight-and-calories'
				width={500}
				height={300}
				data={formatedProps}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid horizontal='true' vertical='' />
				<XAxis dataKey='day' />
				<YAxis yAxisId='right' orientation='left' stroke='#282D30' />
				<YAxis yAxisId='left' orientation='right' stroke='#E60000' />
				{/* <Tooltip /> */}
				<Tooltip content={<CustomTooltip />} />
				<Legend />
				<Bar
					yAxisId='left'
					dataKey='kilogram'
					fill='#282D30'
					barSize={7}
					radius={[3, 3, 0, 0]}
				/>
				<Bar
					yAxisId='right'
					dataKey='calories'
					fill='#E60000'
					barSize={7}
					radius={[3, 3, 0, 0]}
				/>
			</BarChart>
		</div>
	);
};

export default WeightAndCalories;
