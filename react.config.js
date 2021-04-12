const path = require('path')

module.exports = {
	port: 9000,
	// host: '',
	// publicPath: '',
	alias: {
		'@': path.resolve(__dirname, 'src')
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								modifyVars: {},
								javascriptEnabled: true
							}
						}
					}
				]
			}
		]
	},
	proxy: {
		'/soso': {
			target: 'https://c.y.qq.com',
			changeOrigin: true
		}
	}
}
