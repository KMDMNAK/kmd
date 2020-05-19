const path = require("path");

module.exports = {
    target: 'node',
    output: {
        filename: '[name].js',
        path:path.join(__dirname,"api")
    },
    entry: {
        "server": "./src/index.ts"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }, {
                test: /\.graphql$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'graphql-tag/loader'
                    }
                ]
            }, {
                test: /\.gql$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'graphql-tag/loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions:[".ts",".gql",".graphql",".mjs",".js",".jsx",".json"]
    }
}