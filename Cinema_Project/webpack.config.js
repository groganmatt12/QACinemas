module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'public/index.js'
    },
    
    devServer: {
        inline: true,
        port: 8084
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                } 
            },
            { 
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    },
	 resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx']
  },
  
	 node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
