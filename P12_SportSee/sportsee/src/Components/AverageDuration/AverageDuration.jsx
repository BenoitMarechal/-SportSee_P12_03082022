import React from 'react';
import './averageDuration.scss';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
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

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className='custom-tooltip-duration'>
				<p className='desc'>{payload[0].value} min</p>
			</div>
		);
	}

	return null;
};

const AverageDuration = (props) => {
	let formatedProps = props.sessions.map((element) => ({
		day: days[element.day],
		sessionLength: element.sessionLength,
	}));

	return (
		<div className='sessionLength__container'>
			<p className='sessionLength__container__title'>
				Durée moyenne des sessions
			</p>
			<LineChart
				fill='#FF0000'
				width={258}
				height={263}
				data={formatedProps}
				margin={{
					top: 50,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				{' '}
				😋
				<CartesianGrid horizontal='' vertical='' fill='#FF0000' />
				<XAxis
					dataKey='day'
					tickLine={false}
					stroke={'white'}
					fill='#FF0000'
					orientation='bottom'
					textAnchor='middle'
				/>
				<YAxis hide={true} height={150} />
				<Tooltip content={<CustomTooltip />} />
				<Line
					type='monotone'
					dot={false}
					dataKey='sessionLength'
					stroke='#FFFFFF'
					activeDot={{
						fill: '#fff',
						stroke: 'rgba(255, 255, 255, 0.2)',
						strokeWidth: 8,
						r: 4,
						className: 'boxShadow',
					}}
				/>
			</LineChart>
		</div>
	);
};

export default AverageDuration;
