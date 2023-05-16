/** @format */

import React, { useEffect } from 'react';
import { Experiences } from 'component/experience';
import { Header } from 'component/header';
import { NavBar } from 'component/nav';
import { Footer } from 'component/footer';
import { Testimonial } from 'component/testimonial';
import { AboutUs } from 'component/about';
import { ContactUs } from 'component/contact/contact';

const App = () => {
	useEffect(() => {}, []);
	return (
		<div>
			<Header />
			<NavBar />
			<Footer />
			<Experiences />
			<Testimonial />
			<AboutUs />
			<ContactUs />
		</div>
	);
};

export default App;
