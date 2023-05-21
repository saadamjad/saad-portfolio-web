/** @format */

import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { SiBinance } from 'react-icons/si';
import { FaGithubSquare } from 'react-icons/fa';
import './header.css';

const HeaderFolder = () => {
	return (
		<div className='header_socials'>
			<div>
				<a href='https://facebook.com'>
					<BsLinkedin />
				</a>
			</div>
			<div>
				<a href='https://linkedin.com'>
					<SiBinance />
				</a>
			</div>
			<a href='https://github.com'>
				<FaGithubSquare />
			</a>
			<div>
				<a href='https://facebook.com'>
					<BsFacebook />
				</a>
			</div>
		</div>
	);
};

export { HeaderFolder };
