const CracoLessPlugin = require('craco-less');
const pxToViewport = require('postcss-px-to-viewport')
const { resolve } = require('path');

module.exports = {
	plugins: [
		{
			// 这里是配置less的
			plugin: CracoLessPlugin,
			// 下面这块是配置antd的按需引入
			options: {
				lessLoaderOptions: {
					lessOptions: {
						// 这里利用了 less-loader 的 modifyVars 来进行主题配置
						modifyVars: { '@primary-color': '#1DA57A' },
						javascriptEnabled: true,
					},
				},
			},
		},
	],
	webpack: {
		// 配置路径别名
		alias: {
			'@': resolve("src")
		}
	},
	style: {
		postcss: {
			mode: 'extends',
			loaderOptions: {
				postcssOptions: {
					ident: 'postcss',
					plugins:[
						pxToViewport({
							// 视口宽度(设计稿宽度)
							viewportWidth: 375
						})
					]
				}
			}
		}
	}
};