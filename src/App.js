import React from "react"
import "./App.css"
import { Route, Link, BrowserRouter as Router } from "react-router-dom"

function App() {
	return (
		<div>
			<header className="app-header">
				<ul>
					<li>
						<Link to="/covid-timeline">
							A Timeline Of The Coronavirus Outbreak
						</Link>
					</li>
					<li>
						<Link to="/congress">Members of congress</Link>
					</li>
				</ul>
			</header>
		</div>
	)
}

export default App
