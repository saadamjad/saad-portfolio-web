/** @format */

import React from 'react';
import './style.css';
import { CTA } from './CTA';
import myImage from '../../assets/me.png';

const Header = () => {
	return (
		<header>
			<div className='container header_container'>
				<h5>Hello I'm </h5>
				<h1>MUHAMMAD SAAD</h1>
				<h5 className='text-light'> MOBILE APP DEVELOPER</h5>
				<CTA />

				<div className='me'>
					<img
						src={myImage}
						alt='profile-img'
					/>
				</div>
			</div>
		</header>
	);
};

export { Header };
