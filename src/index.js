import React from "react"
import ReactDOM from "react-dom"
import { Route, BrowserRouter as Router } from "react-router-dom"
import "./index.scss"

import CongressPage from "pages/CongressPage"
import * as serviceWorker from "./serviceWorker"

const routing = (
	<Router>
		<div>
			<Route path="/" component={CongressPage} />
		</div>
	</Router>
)
ReactDOM.render(routing, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
