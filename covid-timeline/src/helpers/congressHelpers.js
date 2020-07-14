import axios from "axios"

const apiUrl = "https://api.propublica.org/congress/v1/"

export async function getMembers() {
	const response = await axios.get(`${apiUrl}116/senate/members.json`, {
		headers: {
			"X-API-Key": process.env.REACT_APP_PRO_PUBLICA
		}
	})
	return await response.data.results[0].members
}
