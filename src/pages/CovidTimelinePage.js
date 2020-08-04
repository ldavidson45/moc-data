import React from "react"
import Timeline from "components/covidTimeline/Timeline"

function CovidTimelinePage() {
	return (
		<div>
			<header className="app-header">
				<h1>A Timeline Of The Coronavirus Outbreak</h1>
			</header>
			<Timeline />
		</div>
	)
}

export default CovidTimelinePage
