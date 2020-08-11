import React from "react"
import "components/congress/MemberCard.scss"
import { stateNames } from "helpers/statesData"
import Loading from "components/congress/Loading"

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
			imageLoaded: false
		}

		this.imageUrl = this.imageUrl.bind(this)
		this.toggleLoading = this.toggleLoading.bind(this)
		this.cardImg = React.createRef()
		this.setImageSize = this.setImageSize.bind(this)
	}

	toggleLoading() {
		this.setState(
			{
				imageLoaded: true,
				loading: false
			},
			this.setImageSize
		)
	}

	imageUrl() {
		return `https://theunitedstates.io/images/congress/original/${this.props.id}.jpg`
	}

	setImageSize() {
		const { height = 0, width = 0 } = this.cardImg.current || {}
		const style = {
			visibility: this.state.imageLoaded ? "visible" : "hidden",
			width: "100%",
			height: "auto"
		}
		if (height && width && height / width < 1) {
			style.width = "auto"
			style.height = "100%"
		}
		return style
	}

	render() {
		return (
			<div
				className={"member-card member-card--" + this.props.party}
				tabIndex="0"
			>
				<div>
					<div className="member-card__image-wrapper">
						<img
							ref={this.cardImg}
							style={this.setImageSize()}
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
						<p className="member-name__last">
							{this.props.last_name}
						</p>
						<p className="member-name__subtitle">
							{this.state.description}
						</p>
					</div>
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
