import React from "react"
import "./MemberModalCard.scss"

import DonutChart from "./DonutChart"

class ModalMemberCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			committees: []
		}
		this.modalWrapper = React.createRef()
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
		if (e.target === this.modalWrapper.current) {
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
				<div className="modal">
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
							<tr className="details__item">
								<td className="details__label">
									Next Election Year
								</td>
								<td>
									<ul className="details__committees-list">
										{member.next_election}
									</ul>
								</td>
							</tr>
							<tr>
								<td className="details__committees-list">
									% Votes along party line
								</td>
								<td>
									<div className="details__chart--party">
										<DonutChart
											data={{
												a: member.votes_with_party_pct,
												b:
													member.votes_against_party_pct
											}}
										/>
										<div>
											<p>
												{member.votes_with_party_pct}%
												with party
											</p>
											<p>
												{member.votes_against_party_pct}
												% against party
											</p>
										</div>
									</div>
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
				ref={this.modalWrapper}
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
