import React from 'react';
import './Performance.scss';
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
} from 'recharts';

//export default function App() {
const Performance = (props) => {
	let sortedData = props.data.map((element) => ({
		value: element.value,
		kind: props.kind[element.kind],
	}));

	return (
		<div className='performanceContainer'>
			<RadarChart
				cx={'50%'}
				cy={'50%'}
				outerRadius={70}
				startAngle={-150}
				endAngle={210}
				// 			height: 263px;
				// width: 258px;
				// border-radius: 5px;
				stroke={'white'}
				width={300}
				height={300}
				position={'absolute'}
				data={sortedData}>
				<PolarGrid />
				<PolarAngleAxis dataKey='kind' hide={true} stroke={'white'} />
				<PolarRadiusAxis hide={true} />
				<Radar
					name=''
					dataKey='value'
					stroke={false}
					fill='rgba(255, 1, 1, 0.7)'
				/>
			</RadarChart>
		</div>
	);
};
export default Performance;
