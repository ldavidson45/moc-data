import React from "react"
import "./MemberModalCard.scss"

class ModalMemberCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			committees: []
		}
		this.modalContent = React.createRef()
		this.handleClick = this.handleClick.bind(this)
		this.escFunction = this.escFunction.bind(this)
		this.committees = this.committees.bind(this)
	}

	committees() {
		const committees =
			(this.props.selectedMember &&
				this.props.selectedMember.roles &&
				this.props.selectedMember.roles[0].committees) ||
			[]

		return committees.map((committee) => {
			return <li>{committee.name}</li>
		})
	}

	handleClick(e) {
		if (e.target !== this.modalContent.current) {
			this.props.toggleModal()
		}
	}

	escFunction(event) {
		if (event.keyCode === 27) {
			this.props.toggleModal()
		}
	}
	componentDidUpdate() {
		if (this.props.modalIsOpen) {
			document.addEventListener("keyup", this.escFunction, false)
		} else {
			document.removeEventListener("keyup", this.escFunction, false)
		}
	}
	render() {
		const member = this.props.selectedMember || {}

		const content =
			this.state.loading && !this.state.member ? (
				<div> Loading</div>
			) : (
				<div className="modal" ref={this.modalContent}>
					<div className="modal__header">
						<h3 className="modal__title">
							{member.short_title} {member.first_name}{" "}
							{member.last_name}
						</h3>
					</div>
					<table className="details">
						<tbody>
							<tr className="details__item">
								<td className="details__label">State</td>
								<td>{member.state}</td>
							</tr>

							<tr className="details__item">
								<td className="details__label">Party</td>
								<td>{member.party}</td>
							</tr>
							<tr className="details__item">
								<td className="details__label">
									Leadership Role
								</td>
								<td>{member.leadership_role || "N/A"}</td>
							</tr>
							<tr className="details__item">
								<td className="details__label">Committees</td>
								<td>
									<ul className="details__committees-list">
										{this.committees()}
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
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
