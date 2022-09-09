import './Percentage.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
const backgroundColor = '##FF08';
const COLORS = ['#FF0000', backgroundColor];

/**Percentage React component returns a recharts pie chart graphic about user's goal percentage
 * @param {Object} main is an object created through the Main class, contains user's goal percentage
 *@public
 */

const Percentage = (main) => {
	return (
		<div className='pieChart__container greyBg'>
			<div className='pieChart__container__title'>Score</div>

			<PieChart width={258} height={263} top={0}>
				<Pie
					data={main.percentage}
					cx={'50%'}
					cy={'50%'}
					innerRadius={80}
					outerRadius={90}
					startAngle={90}
					endAngle={450}
					fill={backgroundColor}
					cornerRadius={5}
					paddingAngle={0}
					dataKey='value'>
					{main.percentage.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={index === 0 ? COLORS[index % COLORS.length] : 'none'}
						/>
					))}
				</Pie>
			</PieChart>
			<div className='pieChart__container__text'>
				<div className='pieChart__container__text__score'>{main.score}%</div>

				<span className='pieChart__container__text__small'>
					de votre objectif
				</span>
			</div>
		</div>
	);
};
Percentage.propTypes = {
	main: PropTypes.object,
};
export default Percentage;
