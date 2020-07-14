import React, { Component } from "react"
import { getMembers } from "helpers/congressHelpers"

class CongressPage extends Component {
	constructor(props) {
		super(props)
		this.state = { members: [] }
	}

	async componentDidMount() {
		const members = await getMembers()
		console.log(members)
	}
	render() {
		return (
			<div>
				<header className="app-header">
					<h1>Congress</h1>
				</header>
			</div>
		)
	}
}

export default CongressPage
