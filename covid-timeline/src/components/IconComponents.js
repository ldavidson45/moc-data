import React from "react"
import { Globe, GlobeVirus, GlobeVirus2, Bacteria } from "components/icons"

const IconComponents = {
	globe: Globe,
	globeVirus: GlobeVirus,
	globeVirus2: GlobeVirus2,
	bacteria: Bacteria
}

export default (block) => {
	if (typeof IconComponents[block.component] !== "undefined") {
		return React.createElement(IconComponents[block.component], {
			key: block._uid,
			block: block,
			width: block.width,
			height: block.height
		})
	}
	return
}
