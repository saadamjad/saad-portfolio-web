/** @format */

import React from 'react';
import './style.css';
import { BiCheck } from 'react-icons/bi';

const Service = () => {
	const dataUIUX = [
		{
			key: 'Design',
			data: [
				{
					name: '5+ years of experience in designing',
					icon: <BiCheck className='service_list-icon' />,
				},
				{
					name: '5+ years of experience in designing',
					icon: <BiCheck className='service_list-icon' />,
				},
			],
		},
		{
			key: 'Development',
			data: [
				{
					name: 'Expert in Development',
					icon: <BiCheck className='service_list-icon' />,
				},
				{
					name: 'Expert in Development',
					icon: <BiCheck className='service_list-icon' />,
				},
			],
		},
		{
			key: 'Content',
			data: [
				{
					name: 'Expert in Content Writing',
					icon: <BiCheck className='service_list-icon' />,
				},
				{
					name: 'Expert in Content Writing',
					icon: <BiCheck className='service_list-icon' />,
				},
			],
		},
	];

	return (
		<section id='services'>
			<h5>What I OFfer</h5>
			<h2>Services</h2>

			<div className='container services_container'>
				{dataUIUX.map((item, i) => {
					return (
						<article className='service'>
							<div className='service_head'>
								<h3> {item.key} </h3>
							</div>
							<ul className='service_list'>
								{item.data.map((childItems, index) => {
									return (
										<li>
											<p> {childItems.icon} </p>
											{childItems.name}
										</li>
									);
								})}
							</ul>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export { Service };
