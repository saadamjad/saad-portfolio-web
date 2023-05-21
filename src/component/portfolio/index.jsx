/** @format */

import React from 'react';
import './style.css';

import myImage from '../../assets/me.png';

const Portfolio = () => {
	const data = [{}, {}, {}, {}, {}, {}];
	return (
		<section id='portfolio'>
			<h5>My Recent Work </h5>
			<h2>Portfolio</h2>
			<div className='container portfolio_container'>
				{data.map((item, i) => {
					return (
						<article className='portfolio_item'>
							<div className='portfolio_item-image'>
								<img
									src={myImage}
									alt=''
								/>
							</div>
							<h3>This is a portfolio item title</h3>
							<div className='portfolio_item-cta'>
								<a
									href='https://github.com'
									className='btn'
									target='_blank'>
									Github
								</a>
								<a
									href='https://facebook.com'
									className='btn btn-primary'
									target='_blank'>
									{' '}
									LIVE DEMO
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export { Portfolio };
