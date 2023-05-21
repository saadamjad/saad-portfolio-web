/** @format */

import React from 'react';

import './about.css';
import { FaAward } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { VscFolderLibrary } from 'react-icons/vsc';

import myImage from '../../assets/me.png';

const AboutUs = () => {
	return (
		<section id='#aboutus'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className='container about_container'>
				<div className='about_me'>
					<div className='about_me-image'>
						<img
							className='about_me-image'
							src={myImage}
							alt='About Image'
						/>
					</div>
				</div>
				<div className='about_content'>
					<div className='about_cards'>
						<article className='about_card'>
							<FaAward className='about_icon' />
							<h5>Experience</h5>
							<small> 3+ years of Working </small>
						</article>
						<article className='about_card'>
							<AiOutlineUser className='about_icon' />
							<h5>Client</h5>
							<small> 300+ World Wide </small>
						</article>
						<article className='about_card'>
							<VscFolderLibrary className='about_icon' />
							<h5>Projects</h5>
							<small> 10+ completed from scratch </small>
						</article>
					</div>
					<p>
						Lorem ipsume dolar sit amet consectetur adipecting Lorem ipsume
						dolar sit amet consectetur adipecting Lorem ipsume dolar sit amet
						consectetur adipecting Lorem ipsume dolar sit amet consectetur
						ipsume dolar sit amet consectetur adipecting
					</p>
					<a
						href='#contact'
						className='btn btn-primary'>
						Lets Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export { AboutUs };
