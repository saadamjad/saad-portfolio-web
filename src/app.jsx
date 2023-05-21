/** @format */

import React from 'react';
import { Experiences } from 'component/experience';
import { Header } from 'component/header';
import { NavBar } from 'component/nav';
import { Footer } from 'component/footer';
import { Testimonial } from 'component/testimonial';
import { AboutUs } from 'component/about';
import { ContactUs } from 'component/contact/contact';
import { Portfolio } from 'component/portfolio';
import { Service } from 'component/services';
// import '../src/component/nav/style.css';

const App = () => {
	return (
		<div>
			<Header />
			<AboutUs />

			<NavBar />
			{/* <Footer /> */}
			<Experiences />
			<Service />
			<Portfolio />
			<ContactUs />
		</div>
	);
};

export default App;
