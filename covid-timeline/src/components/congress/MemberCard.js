import React from "react"
import "components/congress/MemberCard.scss"
import { stateNames } from "helpers/statesData"

import { getPartyName } from "helpers/congressHelpers"
class MemberCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			imageUrl: `https://theunitedstates.io/images/congress/original/${props.id}.jpg`,
			fullName: `${props.short_title} ${props.first_name} ${props.last_name}`,
			description: `${getPartyName(props.party)} from ${
				stateNames[props.state]
			}`
		}
	}

	render() {
		return (
			<div className={"member-card member-card--" + this.props.party}>
				<div className="member-card__image-wrapper">
					<img
						className="member-card__image"
						src={this.state.imageUrl}
						alt={this.state.fullName}
					/>
				</div>
				<div className="member-name">
					<p className="member-name__first">
						{this.props.short_title} {this.props.first_name}
					</p>
					<p className="member-name__last">{this.props.last_name}</p>
					<p className="member-name__subtitle">
						{this.state.description}
					</p>
				</div>
			</div>
		)
	}
}

MemberCard.defaultProps = {
	id: "",
	first_name: "",
	last_name: "",
	short_title: "",
	in_office: true,
	state: "",
	party: ""
}

export default MemberCard
