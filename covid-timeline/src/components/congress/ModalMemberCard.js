import React from "react"
import "./MemberModalCard.scss"
import { getMemberDetails } from "helpers/congressHelpers"
import { stateNames } from "helpers/statesData"

class ModalMemberCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			member: undefined,
			loading: true,
			stateImgUrl: `https://img.icons8.com/ios/50/000000/${(
				stateNames[props.selectedMember.state] || ""
			).toLowerCase()}.png`
		}
		this.modalContent = React.createRef()
		this.handleClick = this.handleClick.bind(this)
		this.escFunction = this.escFunction.bind(this)
		this.getMemberDetails = this.getMemberDetails.bind(this)
	}

	async getMemberDetails() {
		const member = await getMemberDetails(this.props.selectedMember)
		this.setState(
			{
				member: { ...member, ...this.props.selectedMember }
			},
			this.setState({ loading: false })
		)
	}

	handleClick(e) {
		if (e.target !== this.modalContent.current) {
			this.setState({ member: undefined, loading: true })

			this.props.toggleModal()
		}
	}

	escFunction(event) {
		if (event.keyCode === 27) {
			this.setState({ member: undefined, loading: true })

			this.props.toggleModal()
		}
	}
	componentDidUpdate() {
		if (this.props.modalIsOpen) {
			document.addEventListener("keyup", this.escFunction, false)
			// this.setState({ loading: true })
			this.getMemberDetails()
		} else {
			document.removeEventListener("keyup", this.escFunction, false)
		}
	}
	render() {
		const member = this.state.member

		const content = !member ? (
			<div> Loading</div>
		) : (
			<div className="modal" ref={this.modalContent}>
				<div className="modal__header">
					<h3 className="modal__title">
						{member.short_title} {member.first_name}{" "}
						{member.last_name}
					</h3>
					<div className="img__wrapper">
						<img
							src={`https://img.icons8.com/ios/50/000000/${(
								stateNames[member.state] || ""
							)
								.replace(/\s/g, "-")
								.toLowerCase()}.png`}
							alt={stateNames[member.state]}
						/>
					</div>
				</div>
			</div>
		)
		return (
			<div
				className={`modal__wrapper ${
					this.props.modalIsOpen ? "visible" : "hidden"
				}`}
				role="dialog"
				aria-modal="true"
				onClick={this.handleClick}
			>
				{content}
			</div>
		)
	}
}

export default ModalMemberCard
