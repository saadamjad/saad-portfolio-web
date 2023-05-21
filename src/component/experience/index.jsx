/** @format */

import React from 'react';
import './style.css';
import { BsPatchCheck } from 'react-icons/bs';
const Experiences = () => {
	const frontEndTech = [
		{
			name: 'HTML',
			description: 'Expert in Html',
			icon: <BsPatchCheck className='experience_details-icon' />,
		},
		{
			name: 'Css',
			description: 'Expert in',
			icon: <BsPatchCheck className='experience_details-icon' />,
		},
		{
			name: 'Javacript',
			description: 'Expert in',
			icon: <BsPatchCheck className='experience_details-icon' />,
		},
		{
			name: 'Tailwind',
			description: 'Expert in',
			icon: <BsPatchCheck className='experience_details-icon' />,
		},
		{
			name: 'React',
			description: 'Expert in',
			icon: <BsPatchCheck className='experience_details-icon' />,
		},
	];
	const backEndTech = [
		{
			name: 'Node JS',
			description: 'Expert in Html',
			icon: <BsPatchCheck className='experience_details-icon' />,
		},
		{
			name: 'Mongo',
			description: 'Expert in',
			icon: <BsPatchCheck className='experience_details-icon' />,
		},
		{
			name: 'Javacript',
			description: 'Expert in',
			icon: <BsPatchCheck className='experience_details-icon' />,
		},
		{
			name: 'Tailwind',
			description: 'Expert in',
			icon: <BsPatchCheck className='experience_details-icon' />,
		},
		{
			name: 'React',
			description: 'Expert in',
			icon: <BsPatchCheck className='experience_details-icon' />,
		},
	];
	return (
		<section id='experience'>
			<h5>What Skills I have</h5>
			<h2>My Experience</h2>
			<div className='container experience_container'>
				<div className='experience_frontend'>
					<h3>Frontend Development</h3>
					{frontEndTech.map((item, i) => {
						return (
							<div className='experience_content'>
								<article className='experience_details'>
									{item.icon}
									<div>
										<h3> {item.name} </h3>
										<small className='text-light'> {item.description} </small>
									</div>
								</article>
							</div>
						);
					})}
				</div>
				<div className='experience_backend'>
					<h3>BackEnd Development</h3>
					{backEndTech.map((item, i) => {
						return (
							<div className='experience_content'>
								<article className='experience_details'>
									{item.icon}
									<div>
										<h3> {item.name} </h3>
										<small className='text-light'> {item.description} </small>
									</div>
								</article>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export { Experiences };
