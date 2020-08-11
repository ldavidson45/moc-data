import React from "react"
import "./MemberModalCard.scss"

import DonutChart from "./DonutChart"
import { memberAge } from "helpers/congressHelpers"

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
		this.modalClose = React.createRef()
	}

	committees() {
		const committees =
			(this.props.selectedMember &&
				this.props.selectedMember.roles &&
				this.props.selectedMember.roles[0].committees) ||
			[]

		return committees.map((committee) => {
			return <li key={committee.code}>{committee.name}</li>
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
	componentDidUpdate(prevProps) {
		if (this.props.modalIsOpen) {
			document.addEventListener("keyup", this.escFunction, false)
		} else {
			document.removeEventListener("keyup", this.escFunction, false)
		}

		if (!prevProps.modalIsOpen && !this.props.modalLoading) {
			this.modalClose.current.focus()
		}
	}
	render() {
		const member = this.props.selectedMember || {}

		const content = this.props.modalLoading ? (
			<div> Loading</div>
		) : (
			<div className="modal__content">
				<div className="modal__header">
					<h3 className="modal__title">
						{member.short_title} {member.first_name}{" "}
						{member.last_name}
					</h3>
					<div>
						<button
							ref={this.modalClose}
							className="button-wrapper modal__close-button"
							onClick={this.props.toggleModal}
							aria-label="close"
						>
							X
						</button>
					</div>
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
							<td className="details__label">Age</td>
							<td>{memberAge(member)}</td>
						</tr>
						{member.leadership_role && (
							<tr className="details__item">
								<td className="details__label">
									Leadership Role
								</td>
								<td>{member.leadership_role || "N/A"}</td>
							</tr>
						)}
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
							<td>{member.next_election}</td>
						</tr>
						<tr className="details__item">
							<td className="details__label">Missed Votes</td>
							<td>
								{`${member.missed_votes} of ${member.total_votes} 
								total votes`}
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
											b: member.votes_against_party_pct
										}}
									/>
									<div>
										<p>
											{member.votes_with_party_pct}% with
											party
										</p>
										<p>
											{member.votes_against_party_pct}%
											against party
										</p>
									</div>
								</div>
							</td>
						</tr>
						<tr className="details__item">
							<td className="details__label">Social Media</td>
							<td>
								{member.twitter_account && (
									<a
										href={
											"https://twitter.com/" +
											member.twitter_account
										}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="twitter account"
									>
										<img
											className="details__icon"
											src="https://image.flaticon.com/icons/svg/1384/1384017.svg"
											alt=""
										/>
									</a>
								)}
								{member.facebook_account && (
									<a
										href={
											"https://www.facebook.com/" +
											member.facebook_account
										}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="facebook page"
									>
										<img
											className="details__icon"
											alt=""
											src="https://image.flaticon.com/icons/svg/1384/1384005.svg"
										/>
									</a>
								)}

								{member.youtube_account && (
									<a
										href={
											"https://www.youtube.com/c/" +
											member.youtube_account
										}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="youtube channel"
									>
										<img
											className="details__icon"
											src="https://image.flaticon.com/icons/svg/1384/1384012.svg"
											alt=""
										/>
									</a>
								)}
							</td>
						</tr>
						<tr>
							<td className="details__label">Contact</td>
							<td>
								<ul>
									<li>{member.office}</li>
									<li>{member.phone}</li>
									<li>
										<a href={member.url} target="_blank">
											Website
										</a>
									</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>Other Links</td>
							<td>
								<ul>
									<li>
										<a
											href={
												"https://www.fec.gov/data/candidate/" +
												member.fec_candidate_id
											}
											target="_blank"
											rel="noopener noreferrer"
										>
											FEC Data
										</a>
									</li>
									<li>
										<a
											href={
												"https://www.govtrack.us/congress/members/" +
												member.first_name +
												"_" +
												member.last_name +
												"/" +
												member.govtrack_id
											}
											target="_blank"
											rel="noopener noreferrer"
										>
											Govtrack
										</a>
									</li>
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
				ref={this.modalWrapper}
				role="dialog"
				aria-modal="true"
				onClick={this.handleClick}
			>
				<div className="modal">{content}</div>
			</div>
		)
	}
}

export default ModalMemberCard
