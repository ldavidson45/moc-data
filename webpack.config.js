const webpack = require("webpack")

module.exports = (env) => {
	return {
		entry: "./src/index.js",
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ["babel-loader"]
				},
				{
					test: /\.svg$/,
					use: ["@svgr/webpack"]
				}
			]
		},
		    plugins: [
      // add the plugin to your plugins array
      new webpack.DefinePlugin({ `process.env.REACT_APP_PRO_PUBLICA`: JSON.stringify(${env.API_URL}) })
    ]
	}
}
