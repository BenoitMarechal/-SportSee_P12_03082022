import React, { useState, useRef } from 'react';
import './averageDuration.scss';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ReferenceArea,
	//Legend,
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
				{/* <div className='shadow'></div> */}
				<p className='desc'>{payload[0].value} min</p>
			</div>
		);
	}

	return null;
};

const AverageDuration = (props) => {
	const graphRef = useRef(null);
	const [hover, setHover] = useState(null);

	/**
	 * Draw path svg to make hover box
	 * @function ReferenceBands
	 * @param {array} props send by ReferenceArea
	 */
	const ReferenceBands = (props) => {
		const { x1 } = props;
		const { offsetWidth } = graphRef.current;
		const startPosition = x1;
		return (
			<path
				fillOpacity={0.1}
				d={`M ${startPosition}, 0 h ${offsetWidth} v ${
					offsetWidth * 2
				} h -${offsetWidth} Z`}></path>
		);
	};

	/**
	 * Set x1 of ReferenceArea when the mouse enter in the component
	 * @function onMouseMoveLineChart
	 * @param {object} e send by LineChart
	 */
	const onMouseMoveLineChart = (e) => {
		setHover(e.activeCoordinate);
	};

	/**
	 * Reset x1 of ReferenceArea when the mouse leave the component
	 * @function onMouseLeaveLineChart
	 * @param {object} e send by LineChart
	 */
	const onMouseLeaveLineChart = (e) => {
		setHover(null);
	};
	let formatedProps = props.sessions.map((element) => ({
		day: days[element.day],
		sessionLength: element.sessionLength,
	}));

	return (
		<div className='sessionLength__container' ref={graphRef}>
			<p className='sessionLength__container__title'>
				Durée moyenne des sessions
			</p>
			<LineChart
				onMouseMove={onMouseMoveLineChart}
				onMouseLeave={onMouseLeaveLineChart}
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
				{hover && (
					<ReferenceArea
						x1={hover.x}
						x2={7}
						y1={-20}
						y2={100}
						fill='#000'
						fillOpacity='0.1'
						shape={<ReferenceBands />}
					/>
				)}
				{/* <LineChart type='natural' dataKey='sessionLength' stroke='#FFFFFF' /> */}
			</LineChart>
		</div>
	);
};

export default AverageDuration;
