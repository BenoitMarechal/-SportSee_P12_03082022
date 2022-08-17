import React from 'react';
import './averageDuration.scss';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	//Legend,
} from 'recharts';
import { useState } from 'react';

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
				{/* <div className='shadow'></div> */}
				<p className='desc'>{payload[0].value} min</p>
			</div>
		);
	}

	return null;
};

// export default function App() {
const AverageDuration = (props) => {
	let formatedProps = props.sessions.map((element) => ({
		day: days[element.day],
		sessionLength: element.sessionLength,
	}));

	//const [perc, setPerc] = useState(0);
	//   const onMouseMove = hoveredData => {
	//     // console.log(hoveredData);
	//     if (hoveredData && hoveredData.activePayload) {
	//       const hoveredX = hoveredData.activePayload[0].payload.name;
	//       const index = data.findIndex(d => d.name === hoveredX);
	//       const percentage = ((data.length - index - 1) * 100) / (data.length - 1);

	//       setPerc(100 - percentage);
	//     }
	//   };

	//   const onMouseOut = () => {
	//     setPerc(0);
	//   };
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
				😋
				{/* <defs>
					{' '}
					<linearGradient id='colorUv' x1='0%' y1='0' x2='100%' y2='0'>
						<stop offset='0%' stopColor='blue' />
						<stop offset={`${perc}%`} stopColor='blue' />
						<stop offset={`${perc}%`} stopColor='red' />
						<stop offset={`${100}%`} stopColor='red' />
					</linearGradient>
				</defs> */}
				<CartesianGrid horizontal='' vertical='' fill='#FF0000' />
				<XAxis
					dataKey='day'
					tickLine={false}
					stroke={'white'}
					fill='#FF0000'
					orientation='bottom'
					textAnchor='middle'
					//height={150}
					// stroke='#9B9EAC'
					//style={{ 'background-color': '	#0000FF' }}
				/>
				<YAxis hide={true} height={150} />
				<Tooltip content={<CustomTooltip />} />
				{/* <Legend fill='#FF0000' /> */}
				<Line
					type='monotone'
					dot={false}
					dataKey='sessionLength'
					stroke='#FFFFFF'
					activeDot={{
						fill: '#fff',
						//stroke: (255, 255, 255, 0.198345),
						stroke: 'rgba(255, 255, 255, 0.2)',
						strokeWidth: 8,
						r: 4,
						className: 'boxShadow',
					}}
					// strokeWidth={2}
				/>
				{/* <LineChart type='natural' dataKey='sessionLength' stroke='#FFFFFF' /> */}
			</LineChart>
		</div>
	);
};

export default AverageDuration;
