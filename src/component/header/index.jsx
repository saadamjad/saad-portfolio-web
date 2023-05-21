/** @format */

import React from 'react';
import { CTA } from './CTA';
import myImage from '../../assets/me.png';
import { HeaderFolder } from './HeaderSocials';
import './header.css';

const Header = () => {
	return (
		<header>
			<div className='container header_container'>
				<h5>Hello I'm </h5>
				<h1>MUHAMMAD SAAD</h1>
				<h5 className='text-light'> MOBILE APP DEVELOPER</h5>
				<CTA />

				<HeaderFolder />
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '30rem',
						overflow: 'hidden',
					}}>
					<div className='me'>
						<img
							src={myImage}
							alt='me'
						/>
					</div>
				</div>

				<a
					href='#contact'
					className='scroll_down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export { Header };
