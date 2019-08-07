import React, { Component } from "react";
import { render } from "react-dom";
import { DATA_TOOLBOX } from '../const';

class Toolbox extends Component {
	
	format_toolbox(data, idx){
		var returnList = [];
		return(
			<div className="tools-container" key={idx}>
				<div className="tools-content-heading">
					<img alt={data.title + "-icon"} src={data.image}></img>
					<h3>{data.title}</h3>
				</div>
				<ul>
					{data.tools.map((d, i) =>
						<li key={i}>{d}</li>
					)}
				</ul>
			</div>
		);
    };


	render() {
		return (
			<section id="toolbox">
				<div id="toolbox-container">
					<h2>TOOLBOX</h2>
					<div id="toolbox-content">
						{DATA_TOOLBOX.map((d, i) =>
							this.format_toolbox(d, i)
						)}
					</div>
					
				</div>
			</section>
		)

	}

}

export default Toolbox




 