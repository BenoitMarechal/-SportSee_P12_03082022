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

//export default function App() {
const Performance = (props) => {
	let sortedData = props.data.map((element) => ({
		value: element.value,
		kind: kindTranslation[props.kind[element.kind]],
	}));

	return (
		<div className='performanceContainer'>
			<RadarChart
				cx={'50%'}
				cy={'50%'}
				outerRadius={90}
				startAngle={-150}
				endAngle={210}
				// 			height: 263px;
				// width: 258px;
				// border-radius: 5px;
				stroke={'white'}
				width={258}
				height={263}
				//position={'absolute'}
				data={sortedData}>
				<PolarGrid radialLines={false} />
				<PolarAngleAxis dataKey='kind' stroke={'white'} strokeWidth={0} />
				{/* <PolarRadiusAxis stroke={'blue'} radius={120} /> */}
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
