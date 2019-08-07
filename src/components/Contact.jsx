import React, { Component } from "react";
import { render } from "react-dom";
import { DATA_CONTACTS } from '../const';


class Contact extends Component {
	
	setDivider = () => {
		return(
			<svg preserveAspectRatio="none" viewBox="0 0 100 102" height="100" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
				<path d="M0 0 L50 100 L100 0 Z" fill="#ecf0f1" stroke="#ecf0f1"></path>
			</svg>
		)
	}

	render() {
		return (
			<section id="contact">
				{this.setDivider()}
				<div id="contact-container">
					<h2>CONTACT</h2>
					<div id="contacts-bar">
						{DATA_CONTACTS.bar.map((d, i) => 
							<div key={i} className="contacts-bar-content">
								<img src={d.icon}></img>
								<p>{d.label}</p>
							</div>
						)}
					</div>

					<footer>
						Made with <span style={{"color": "#e25555"}}>&#9829;</span> by Alex, hosted on GitHub Pages
					</footer>
				</div>
			</section>
		)
	}

}

export default Contact