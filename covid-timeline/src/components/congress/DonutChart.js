import React from "react"
import * as d3 from "d3"
import "./MemberModalCard.scss"

function DonutChart(props) {
	const data = props.data
	const width = 300
	const height = 300
	const margin = 5

	var radius = Math.min(width, height) / 2 - margin
	const svg = d3
		.selectAll("#donutChart")
		.append("svg")
		.attr("viewBox", `0 0 ${width} ${height}`)
		.attr("height", "100%")
		.append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

	var color = d3.scaleOrdinal().domain(data).range(["green", "red"])

	var pie = d3.pie().value(function (d) {
		return d.value
	})
	var data_ready = pie(d3.entries(data))

	// The arc generator
	var arc = d3
		.arc()
		.innerRadius(radius * 0.4) // This is the size of the donut hole
		.outerRadius(radius * 0.9)

	// Draw the donut chart segments

	svg.selectAll("item")
		.data(data_ready)
		.enter()
		.append("path")
		.attr("d", arc)
		.attr("fill", function (d) {
			return color(d.data.key)
		})
		.attr("height", "100%")
		.attr("stroke", "black")
		.style("stroke-width", "2px")
		.style("opacity", 0.7)

	// Insert labels for each segment

	return (
		<div className="d3-container">
			<div id="donutChart" key={props.data.a}></div>
		</div>
	)
}

export default DonutChart
