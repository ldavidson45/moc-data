import React, { Component } from "react"
import "./Timeline.scss"

import TimelineCard from "./TimelineCard"

const timelineData = require("./timelinedata.json")

class Timeline extends Component {
	render() {
		const items = timelineData.dates.map((date, index) => {
			return (
				<li className="timeline__item" key={index}>
					<TimelineCard {...date} />
				</li>
			)
		})
		return <ul className="timeline">{items}</ul>
	}
}

export default Timeline
