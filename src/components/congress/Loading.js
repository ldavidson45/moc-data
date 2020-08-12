import React, { Component } from "react"
import "./Loading.scss"

class Loading extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props)
	}
	render() {
		console.log(this.props)
		return (
			<div
				className={
					this.props.loading ? "loading visible" : "loading hidden"
				}
			>
				<div className="loading__spinner">
					<svg viewBox="0 0 83.736137 83.716446">
						<g
							transform="translate(-54.564819,-111.98972)"
							id="layer1"
						>
							<path
								stroke-linecap="round"
								path-effect="#path-effect839"
								id="path837"
								d="m 61.232142,153.45833 c 0.124999,-10.86399 5.606582,-21.53865 14.363096,-27.97024 5.38797,-3.95742 11.923327,-6.33322 18.594879,-6.7596 6.671553,-0.42638 13.456233,1.09816 19.303953,4.33786 5.84771,3.23969 10.73822,8.18336 13.91433,14.06585 3.17611,5.88249 4.62682,12.68346 4.12731,19.34994 -0.53365,7.12219 -3.29882,14.06107 -7.80996,19.59822 -4.51114,5.53715 -10.74795,9.64766 -17.61531,11.60977 -6.867353,1.9621 -14.334349,1.76696 -21.08985,-0.55115 -6.755501,-2.31811 -12.769104,-6.74877 -16.984876,-12.51398"
								fill="none"
								stroke="#000000"
								stroke-width="13"
							/>
						</g>
					</svg>
				</div>
			</div>
		)
	}
}

export default Loading
