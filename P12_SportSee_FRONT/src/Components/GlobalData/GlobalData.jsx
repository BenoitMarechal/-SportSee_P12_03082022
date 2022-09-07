import React from 'react';
import './GlobalData.scss';

import PropTypes from 'prop-types';

const GlobalData = (main) => {
	return (
		<div className='container__content__graphics__globalData'>
			{main.keyData.map((nutrient) => {
				return (
					<div key={nutrient.label} className='keyData greyBg'>
						<img
							className='keyData__img'
							src={nutrient.icon}
							alt={nutrient.label}
						/>
						<div className='keyData__txt'>
							<div className='keyData__txt__amount'>
								{nutrient.amount.toLocaleString('en-US')}
								{nutrient.unit}
							</div>
							<div className='keyData__txt__label'>{nutrient.label}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

GlobalData.propTypes = {
	main: PropTypes.object,
};

export default GlobalData;
