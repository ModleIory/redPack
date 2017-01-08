const webpack = require('webpack')
const path = require('path')

const root = __dirname

module.exports = {
	entry:{
		index:path.resolve(root,'index.js')
	},
	output:{
		// publicPath:"",
		path:path.resolve(root,'dest'),
		filename:'[name].bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel'
			},
			{
				test:/\.css$/,
				loader:'style!css'
			},
			{
				test:/\.vue$/,
				loader:'vue'
			},
			{
				test:/\.(png)|(jpg)|(jpeg)|(gif)$/,
				loader:'url?limit='+1024*100
			},
			{
				test:/\.(png|jpg|jpeg|gif|mp4|mp3)$/,
				loader:"file"
			},
		]
	},
	devServer:{
		//谷歌浏览器不能访问有的端口,比如6666
		port:5555,
		baseContent:'./',
	},
	resolve:{
		extensions:['','.css','.js','.vue'],
		alias:{
			'vue$':'vue/dist/vue.common.js'
		}

	},
	plugins:[

	],
	externals:{

	}
}