import React, { Component } from "react";
import { render } from "react-dom";
import { DATA_EXPERIENCE } from '../const';

class Experience extends Component {
	
	constructor(props){
		super(props)
		this.state = {
		}
	};

	expFill(){
		var returnList = [];
		for (let i = 0; i < DATA_EXPERIENCE.length; i++){

			returnList.push(
				<div key={i} className="job-container">
					<div className="div-sphere"></div>
					<div className="job-content">
						<h3>{DATA_EXPERIENCE[i].title}</h3>
						<h4>{DATA_EXPERIENCE[i].company}</h4>
						<h4 className="job-content-date">{DATA_EXPERIENCE[i].date.start} - {DATA_EXPERIENCE[i].date.end}</h4>
						<ul>
							{DATA_EXPERIENCE[i].notes.map((d, j) =>
								<li key={j}>{d}</li>
							)}
						</ul>
					</div>
				</div>
			);
			
		};

		return(returnList);
	};

	render() {
		return (
			<section id="exp">
				<div id="exp-container">
					<h2>EXPERIENCE</h2>
					<div>
						{ this.expFill() }
						<div className="job-container-dropoff"></div>
					</div>
				</div>
			</section>
		)

	}

}

export default Experience




 