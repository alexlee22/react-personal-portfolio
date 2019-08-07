import React, { Component } from "react";
import { render } from "react-dom";
import { DATA_PORTFOLIO, EXTERNAL_LINK } from '../const';


class Portfolio extends Component {
	
	portfolioFill = () => {
		var returnList = [];
		for (let i = 0; i < DATA_PORTFOLIO.length; i++){
			returnList.push(
				<div key={i} className="portfolio-project">
					<div className="portfolio-project-image" style={{ backgroundImage: "url(" + DATA_PORTFOLIO[i]['image'] }} />
					<div className="portfolio-project-container">
						<h3>{DATA_PORTFOLIO[i].title}</h3>
						<p>{DATA_PORTFOLIO[i].desc}</p>
						<div className="portfolio-project-links">
							{ DATA_PORTFOLIO[i].links.map((d, idx) =>
								<a key={idx} href={d.url} target="_blank">
									<img src={EXTERNAL_LINK}></img>{d.desc}
								</a>
							)}
						</div>
					</div>
				</div>
			);
		};
		return(returnList);
	};

	render() {
		
		return (
			<section id="portfolio">
				<div id="portfolio-container">
					<h2>PROJECTS</h2>
					<div id="#portfolio-content-wrapper">
						{ this.portfolioFill() }
					</div>
				</div>
			</section>
		)

	}

}

export default Portfolio
