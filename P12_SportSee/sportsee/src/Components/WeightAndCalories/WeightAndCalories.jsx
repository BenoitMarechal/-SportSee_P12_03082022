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
const CustomTooltip = ({ active, payload }) => {
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
	//console.log(props);
	let formatedProps = props.sessions.map((session) => ({
		day: session.day.toString().slice(-1),
		kilogram: session.kilogram,
		calories: session.calories,
	}));

	return (
		<div>
			<h2 className='weight-and-calories__h2'>Activité quotidienne</h2>
			<BarChart
				width={835}
				height={350}
				data={formatedProps}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<div>Activité quotidienne</div>
				<CartesianGrid horizontal={'true'} vertical='' strokeDasharray='2 2' />
				<XAxis
					dataKey='day'
					padding={{ left: -50, right: -51 }}
					tickLine={false}
					//strokeDasharray='2 2'
					//axisLine={'1px solid blue'}
					stroke='#9B9EAC'
				/>
				<YAxis yAxisId='right' orientation='left' color='#282D38' hide={true} />
				<YAxis
					yAxisId='left'
					orientation='right'
					stroke='#9B9EAC'
					type='number'
					domain={['dataMin - 1', 'dataMax + 1']}
					tickLine={false}
					axisLine={false}
					minTickGap={'0'}
					tickSize={45}
					// interval={1}
					allowDecimals={false}
				/>
				{/* <Tooltip /> */}
				<Tooltip content={<CustomTooltip />} />
				<Legend
					align='right'
					verticalAlign='top'
					iconType={'circle'}
					height={50}
				/>
				<Bar
					yAxisId='left'
					dataKey='kilogram'
					fill='#282D30'
					barSize={7}
					radius={[3, 3, 0, 0]}
					name={'Poids (kg)'}
				/>
				<Bar
					yAxisId='right'
					dataKey='calories'
					fill='#E60000'
					barSize={7}
					radius={[3, 3, 0, 0]}
					name={'Calories brulées (kCal)'}
				/>
			</BarChart>
		</div>
	);
};

export default WeightAndCalories;
