const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'none',
    entry: {
        main: '.' + path.sep + path.join('src_js', 'opcut', 'main')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build', 'jsopcut'),
        pathinfo: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader?sourceMap"]
            },
            {
                test: /\.ttf$/,
                use: "file-loader?name=fonts/[hash].[ext]"
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src_js'),
            path.join(__dirname, 'src_web'),
            path.join(__dirname, 'node_modules')]
    },
    watchOptions: {
        ignored: /node_modules/
    },
    plugins: [
        new CopyWebpackPlugin([{from: 'src_web/static'}])
    ],
    devtool: 'source-map',
    stats: 'errors-only'
};
