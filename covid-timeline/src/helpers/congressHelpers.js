import axios from "axios"
const apiUrl = "https://api.propublica.org/congress/v1/"
const apiHeaders = { "X-API-Key": process.env.REACT_APP_PRO_PUBLICA }

export async function getMembers() {
	const response = await axios.get(`${apiUrl}116/senate/members.json`, {
		headers: apiHeaders
	})
	return await response.data.results[0].members
}

export function getPartyName(initial) {
	switch (initial) {
		case "R":
			return "Republican"
		case "D":
			return "Democrat"
		case "ID":
			return "Independent"
		default:
			return
	}
}

export async function getMemberDetails(member) {
	const memberApiUrl = member.api_uri
	const response = await axios.get(memberApiUrl, { headers: apiHeaders })
	return await response.data.results[0]
}

export const sortData = [
	"Sort By:",
	"Age: Young to Old",
	"Age: Old to Young",
	"Missed Votes Count",
	"Most Votes Against Party",
	"Most Votes With Party"
]

export function sortMembers(members, event) {
	console.log(event.target.value)
	switch (event.target.value) {
		case "Age: Young to Old":
			return members.sort(function (a, b) {
				return memberAge(a) - memberAge(b)
			})
		case "Age: Old to Young":
			return members.sort(function (a, b) {
				return memberAge(b) - memberAge(a)
			})
		case "Missed Votes Count":
			return members.sort(function (a, b) {
				return b.missed_votes - a.missed_votes
			})
		case "Most Votes Against Party":
			return members.sort(function (a, b) {
				return b.votes_against_party_pct - a.votes_against_party_pct
			})
		case "Most Votes With Party":
			return members.sort(function (a, b) {
				return b.votes_with_party_pct - a.votes_with_party_pct
			})
		default:
			return members.sort(function (a, b) {
				return a - b
			})
	}
}

export function memberAge(member) {
	return new Date() - new Date(member.date_of_birth)
}
