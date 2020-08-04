import React, { Component } from "react"
import "./TimelineCard.scss"
import { Globe, GlobeVirus, GlobeVirus2, Bacteria } from "components/icons"
import IconComponent from "components/covidTimeline/IconComponents"

class TimelineCard extends Component {
	render() {
		const { date, description, imageName } = this.props
		const IconImage = imageName
		const block = {
			component: imageName,
			_uid: 1,
			height: "100%"
		}

		return (
			<div className="card">
				<h4 className="card__date">{date}</h4>
				<p className="card__text">{description}</p>
				{IconComponent(block)}
			</div>
		)
	}
}

export default TimelineCard
