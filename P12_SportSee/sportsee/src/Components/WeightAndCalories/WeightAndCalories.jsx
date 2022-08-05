import React from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

const WeightAndCalories = (props) => {
	return (
		<BarChart
			width={500}
			height={300}
			data={props.sessions}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}>
			<CartesianGrid strokeDasharray='3 3' />
			<XAxis dataKey='day' />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey='kilogram' fill='#8884d8' />
			<Bar dataKey='calories' fill='#82ca9d' />
		</BarChart>
	);
};

export default WeightAndCalories;
