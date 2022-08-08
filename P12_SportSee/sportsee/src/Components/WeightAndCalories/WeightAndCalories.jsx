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

const WeightAndCalories = (props) => {
	let formatedProps = props.sessions.map((session) => ({
		day: session.day.toString().slice(-1),
		kilogram: session.kilogram,
		calories: session.calories,
	}));
	console.log(props);
	console.log(formatedProps);

	return (
		<BarChart
			width={500}
			height={300}
			data={formatedProps}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}>
			<CartesianGrid strokeDasharray='3 3' />
			<XAxis dataKey='day' />

			<YAxis dataKey='kilogram' domain={[0, 'auto']} />

			<Tooltip />
			<Legend />
			<Bar dataKey='kilogram' fill='#282D30' />
			<Bar dataKey='calories' fill='#E60000' />
		</BarChart>
	);
};

export default WeightAndCalories;
