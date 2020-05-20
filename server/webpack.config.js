const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, "dist")
    },
    entry: {
        "server": "./src/index.ts"
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [{
                loader: "ts-loader"
            }]
        }, {
            test: /\.graphql$/,
            exclude: /node_modules/,
            use: [{
                loader: 'graphql-tag/loader'
            }]
        }, {
            test: /\.gql$/,
            exclude: /node_modules/,
            use: [{
                loader: 'graphql-tag/loader'
            }]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: process.env.DEV_PORT || 9000,
        clientLogLevel: 'debug'
    },
    resolve: {
        extensions: [".ts", ".gql", ".graphql", ".mjs", ".js", ".jsx", ".json"]
    },
    externals: [nodeExternals()]
}