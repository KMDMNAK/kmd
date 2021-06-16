module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 3000,
            aggregateTimeout: 300,
        }
        return config
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.txt$/i,
            use: 'raw-loader',
        })
        return config
    },
}