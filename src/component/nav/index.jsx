/** @format */

import React, { useEffect, useState } from 'react';
import './style.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';

import { RiServerLine } from 'react-icons/ri';
import './style.css';

const NavBar = () => {
	const [activeNav, setActiveNav] = useState('#');

	const onPressHandler = (value) => {
		setActiveNav(value);
	};
	return (
		<nav>
			<a
				onClick={() => setActiveNav('#')}
				className={activeNav === '#' ? 'active' : ''}
				href='#experience'>
				<AiOutlineHome />
			</a>
			<a
				onClick={() => onPressHandler('about')}
				className={activeNav === 'about' ? 'active' : ''}
				href='#contact'>
				<AiOutlineUser />
			</a>

			<a
				href='#experience'
				onClick={() => onPressHandler('experience')}
				className={activeNav === 'experience' ? 'active' : ''}>
				<BiBook />
			</a>
			<a
				href='#portfolio'
				onClick={() => onPressHandler('portfolio')}
				className={activeNav === 'portfolio' ? 'active' : ''}>
				<RiServerLine />
			</a>
			<a
				href='#aboutus'
				onClick={() => onPressHandler('aboutus')}
				className={activeNav === 'aboutus' ? 'active' : ''}>
				<BiMessageSquareDetail />
			</a>
		</nav>
	);
};

export { NavBar };
