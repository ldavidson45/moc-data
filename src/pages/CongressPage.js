import React from "react"
import "pages/CongressPage.scss"
import {
	getMembers,
	getMemberDetails,
	sortData,
	sortMembers
} from "helpers/congressHelpers"

import MemberCard from "components/congress/MemberCard"
import ModalMemberCard from "components/congress/ModalMemberCard"

class CongressPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			members: [],
			modalIsOpen: false,
			modalLoading: true,
			loading: true,
			selectedMember: {},
			chamber: "Sen."
		}

		this.toggleModal = this.toggleModal.bind(this)
		this.handleOpen = this.handleOpen.bind(this)
		this.clearMemberSelection = this.clearMemberSelection.bind(this)
		this.handleSort = this.handleSort.bind(this)
		this.filteredMembers = this.filteredMembers.bind(this)
		this.setChamber = this.setChamber.bind(this)
		this.isTabSelected = this.isTabSelected.bind(this)
		this.tabButtonClasses = this.tabButtonClasses.bind(this)
	}

	async componentDidMount() {
		const members = await getMembers()
		this.setState({ members: await members, loading: false })
	}
	toggleModal() {
		this.setState(
			{
				modalIsOpen: !this.state.modalIsOpen
			},
			this.clearMemberSelection
		)
	}

	isTabSelected(tab) {
		return tab === this.state.chamber
	}

	tabButtonClasses(tab) {
		const selectedClass = this.isTabSelected(tab)
			? "members-list__tab--active"
			: ""
		return `members-list__tab ${selectedClass} button-wrapper `
	}

	filteredMembers() {
		return this.state.members.filter(
			(member) => member.short_title === this.state.chamber
		)
	}

	clearMemberSelection() {
		if (!this.state.modalIsOpen) {
			this.setState({ selectedMember: undefined })
		}
	}

	async handleOpen(event, member) {
		if (event.keyCode === 13 || event.type === "click") {
			const memberDetails = await getMemberDetails(member)
			this.setState(
				{
					selectedMember: { ...member, ...memberDetails },
					modalIsOpen: !this.state.modalIsOpen
				},
				this.setState({ modalLoading: false })
			)
		}
	}
	async handleSort(event) {
		this.setState(
			{
				loading: true,
				members: await sortMembers(this.state.members, event)
			},
			this.setState({ loading: false })
		)
	}

	setChamber(chamber) {
		this.setState({
			chamber
		})
	}
	render() {
		const membersList = this.filteredMembers().map((member) => {
			return (
				<li
					onClick={(event) => {
						this.handleOpen(event, member)
					}}
					onKeyDown={(event) => this.handleOpen(event, member)}
					key={member.id}
				>
					<MemberCard {...member} key={member.id} />
				</li>
			)
		})

		const sortOptions = sortData.map((field) => {
			return (
				<option name={field} key={field}>
					{field}
				</option>
			)
		})

		return (
			<div className="members-list__wrapper">
				<div className="members-list__header">
					<h1>Members Of Congress</h1>
				</div>
				<div className="members-list__tabs">
					<button
						onClick={() => {
							this.setChamber("Sen.")
						}}
						className={this.tabButtonClasses("Sen.")}
						name="Sen."
						aria-pressed={this.isTabSelected("Sen.")}
					>
						Senate
					</button>
					<button
						onClick={() => {
							this.setChamber("Rep.")
						}}
						className={this.tabButtonClasses("Rep.")}
						name="Rep."
						aria-pressed={this.isTabSelected("Rep.")}
					>
						House
					</button>
					<div className="members-list__sort-dropdown">
						<select name="sort-by" onInput={this.handleSort}>
							{sortOptions}
						</select>
					</div>
				</div>
				<div className="members-list__container">
					<ul className="members-list">{membersList}</ul>
				</div>

				<ModalMemberCard
					modalIsOpen={this.state.modalIsOpen}
					toggleModal={this.toggleModal}
					modalLoading={this.state.modalLoading}
					selectedMember={this.state.selectedMember}
				/>
			</div>
		)
	}
}

export default CongressPage
