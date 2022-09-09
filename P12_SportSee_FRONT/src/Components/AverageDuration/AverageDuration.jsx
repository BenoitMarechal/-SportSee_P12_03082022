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
import PropTypes from 'prop-types';
/**Allows to customize the tooltip in averageDuration graph
 *@param {bool} active defines wether tooltip is active
 *@param {array} payload contains the values to be displayed in tooltip
 *@public
 */
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
CustomTooltip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};
/**AverageDuration React component returns a Rechart graphic diplaying the duration of user's last 7 sessions
 * @param {Object} duration is an object created through the Duration class, contains user's 7 last sessions and their duration
 *@public
 */
const AverageDuration = (duration) => {
	return (
		<div className='sessionLength__container'>
			<p className='sessionLength__container__title'>
				Durée moyenne des sessions
			</p>
			<LineChart
				fill='#FF0000'
				width={258}
				height={263}
				data={duration.sessions}
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
AverageDuration.propTypes = {
	duration: PropTypes.object,
};
export default AverageDuration;
