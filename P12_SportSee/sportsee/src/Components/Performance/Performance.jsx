import React from 'react';
import './Performance.scss';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
const Performance = (performance) => {
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
				data={performance.data}>
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
Performance.propTypes = {
	performance: PropTypes.object,
};
export default Performance;
