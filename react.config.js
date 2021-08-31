const path = require('path')

module.exports = {
	port: 9001,
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
		},
		'/api': {
			target: 'http://localhost:8888',
			changeOrigin: true
		}
	}
}

//bss
