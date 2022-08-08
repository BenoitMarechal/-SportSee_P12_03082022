import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

let days = {
	1: 'L',
	2: 'M',
	3: 'M',
	4: 'J',
	5: 'V',
	6: 'S',
	7: 'D',
};

// export default function App() {
const AverageDuration = (props) => {
	let formatedProps = props.sessions.map((element) => ({
		day: days[element.day],
		sessionLength: element.sessionLength,
	}));
	return (
		<LineChart
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
			<YAxis />
			<Tooltip />
			<Legend />
			<Line
				type='monotone'
				dataKey='sessionLength'
				stroke='#8884d8'
				activeDot={{ r: 8 }}
			/>
			<LineChart type='monotone' dataKey='sessionLength' stroke='#82ca9d' />
		</LineChart>
	);
};

export default AverageDuration;
