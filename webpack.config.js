const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, "public"),
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
        {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: ['url-loader?limit=10000', 'img-loader']
        }
    ]
    },
    devtool: 'source-map',
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, "public"),
        hot: true,
        historyApiFallback: { index: "index.html" }
    }
}