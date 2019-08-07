import React, { Component } from "react";
import { render } from "react-dom";
import Vis from './Vis';
import ScrollReveal from 'scrollreveal'
import { DATA_SPLASH } from '../const';

import SmoothScroll from 'smooth-scroll'

class Splash extends Component {
	
	componentDidMount = () => {
		// SmoothScroll for just splash page
		var classLists = ['#splash-name', '#splash-subheading', '#splash-icons', '#splash-arrow', '#splash-doodle'];
		var delay = 0;
		var duration = 1250;
		for (var i = 0; i < classLists.length; i++){
			ScrollReveal().reveal(classLists[i], {
				delay: duration * (i/2),
				duration: duration,
				reset: false
			});
		}
		var scroll = new SmoothScroll('a[href*="#"]');
	}

	render() {
		return (
			<section id="splash-container">
				<Vis />
				<div id="splash-content">
					<div id="splash-name">{DATA_SPLASH.name}</div>
					<div id="splash-subheading">{DATA_SPLASH.title}</div>
					<div id="splash-icons">
						{DATA_SPLASH.links.map((d, i) =>
							<a key={i} target="_blank" href={d.link}>
								<img alt={d.alt} src={d.icon}></img>	
							</a>
						)}
					</div>
				</div>
				<a href="#bio">
					<img id="splash-arrow" src={DATA_SPLASH.down}></img>
				</a>
			</section>
		)

	}

}

export default Splash

