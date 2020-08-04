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
			loading: true,
			selectedMember: {}
		}

		this.toggleModal = this.toggleModal.bind(this)
		this.handleOpen = this.handleOpen.bind(this)
		this.clearMemberSelection = this.clearMemberSelection.bind(this)
		this.handleSort = this.handleSort.bind(this)
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

	clearMemberSelection() {
		if (!this.state.modalIsOpen) {
			this.setState({ selectedMember: undefined })
		}
	}

	async handleOpen(member) {
		const memberDetails = await getMemberDetails(member)
		this.setState(
			{
				selectedMember: { ...member, ...memberDetails }
			},
			this.toggleModal
		)
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
	render() {
		const membersList = this.state.members.map((member, index) => {
			return (
				<li
					onClick={() => {
						this.handleOpen(member)
					}}
					key={index}
				>
					<MemberCard {...member} />
				</li>
			)
		})

		const sortOptions = sortData.map((field) => {
			return <option name={field}>{field}</option>
		})

		return (
			<div>
				<h1>Members Of Congress</h1>
				<label for="sort-by">Sort by:</label>

				<select
					name="sort-by"
					id="pet-select"
					onInput={this.handleSort}
				>
					{sortOptions}
				</select>

				<div className="members-list__container">
					<ul className="members-list">{membersList}</ul>
				</div>
				<ModalMemberCard
					modalIsOpen={this.state.modalIsOpen}
					toggleModal={this.toggleModal}
					selectedMember={this.state.selectedMember}
				/>
				<footer>
					{" "}
					<a href="https://icons8.com/icon/120173/alabama">
						Icons by Icons8
					</a>
				</footer>
			</div>
		)
	}
}

export default CongressPage
