import React from "react"
import "pages/CongressPage.scss"
import { getMembers } from "helpers/congressHelpers"

import MemberCard from "components/congress/MemberCard"

class CongressPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { members: [] }
	}

	async componentDidMount() {
		this.setState({ members: await getMembers() })
	}

	render() {
		const membersList = this.state.members.map((member, index) => {
			return (
				<li>
					<MemberCard key={index} {...member} />
				</li>
			)
		})
		return (
			<div>
				<h1>Members Of Congress</h1>
				<div className="members-list__container">
					<ul className="members-list">{membersList}</ul>
				</div>
			</div>
		)
	}
}

export default CongressPage
