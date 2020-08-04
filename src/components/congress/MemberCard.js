import React, { useEffect } from "react"
import "components/congress/MemberCard.scss"
import { stateNames } from "helpers/statesData"

import { getPartyName } from "helpers/congressHelpers"
class MemberCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fullName: `${props.short_title} ${props.first_name} ${props.last_name}`,
			description: `${getPartyName(props.party)} from ${
				stateNames[props.state]
			}`,
			loading: true,
			imageLoaded: false,
			timer: undefined
		}

		this.imageUrl = this.imageUrl.bind(this)
		this.toggleLoading = this.toggleLoading.bind(this)
	}

	componentDidMount() {
		this.setState({
			timer: setTimeout(() => this.setState({ loading: false }), 3000)
		})
	}

	componentWillUnmount() {
		clearTimeout(this.state.timer)
	}

	toggleLoading() {
		this.setState({
			imageLoaded: true,
			loading: false
		})
	}

	imageUrl() {
		return `https://theunitedstates.io/images/congress/original/${this.props.id}.jpg`
	}

	render() {
		return (
			<div
				style={{
					display: this.state.loading ? "none" : "block"
				}}
				className={"member-card member-card--" + this.props.party}
				tabIndex="0"
			>
				<div className="member-card__image-wrapper">
					<img
						style={{
							display: this.state.imageLoaded ? "block" : "none"
						}}
						onLoad={this.toggleLoading}
						className="member-card__image"
						src={this.imageUrl()}
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
