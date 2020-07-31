const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
    output:{
        path: path.join(__dirname,'/dist'),
        filename: 'bundle.js'
    },
    devServer: {
      inline: true, // autorefresh
      port: 8080 // development port server
   },    
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}