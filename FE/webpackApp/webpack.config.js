var webpack = require('webpack')


module.exports = {
    entry: './runoob.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
     module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
     },
    plugins: [
        new webpack.BannerPlugin('学习教程 webpack 实例')
    ]
 }