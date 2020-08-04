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