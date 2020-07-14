import React, { Component } from "react"
import "./TimelineCard.scss"

class TimelineCard extends Component {
	render() {
		const { date, description, image } = this.props
		return (
			<div className="card">
				<h4 className="card__date">{date}</h4>
				<p className="card__text">{description}</p>
				<img src="./icons/globe.svg" width="100%" />
			</div>
		)
	}
}

export default TimelineCard
