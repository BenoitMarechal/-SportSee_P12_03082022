import React from 'react';
import './Performance.scss';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
let kindTranslation = {
	cardio: 'Cardio',
	energy: 'Energie',
	endurance: 'Endurance',
	strength: 'Force',
	speed: 'Vitesse',
	intensity: 'Intensité',
};
let revert4 = {
	1: '5',
	2: '6',
	3: '1',
	4: '2',
	5: '3',
	6: '4',
};

//export default function App() {
const Performance = (props) => {
	let revertData = props.data.map((element) => ({
		value: element.value,
		kind: revert4[element.kind],
	}));

	let sortedData = revertData.map((element) => ({
		value: element.value,
		kind: kindTranslation[props.kind[element.kind]],
	}));

	return (
		<div className='performanceContainer'>
			<RadarChart
				cx={'50%'}
				cy={'50%'}
				outerRadius={90}
				startAngle={90}
				endAngle={450}
				/////////////////
				stroke={'white'}
				width={258}
				height={263}
				data={sortedData}>
				<PolarGrid radialLines={false} />
				<PolarAngleAxis dataKey='kind' stroke={'white'} strokeWidth={0} />

				<Radar
					name=''
					dataKey='value'
					strokeWidth={0}
					fill='rgba(255, 1, 1, 0.7)'
				/>
			</RadarChart>
		</div>
	);
};
export default Performance;
