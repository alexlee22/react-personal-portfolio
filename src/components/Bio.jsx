import React, { Component } from "react";
import { render } from "react-dom";
import { DATA_BIO } from '../const';

class Bio extends Component {
	
	render() {
		return (
			<section id="bio">
				<div id="bio-container">
					<h2>HELLO!</h2>
					<div id="bio-content">
						{ DATA_BIO.text.map((d, i) =>
							<p key={i}>{d}</p>
						)}
					</div>
				</div>
			</section>
		)
	}

}

export default Bio