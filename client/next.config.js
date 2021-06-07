module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 3000,
            aggregateTimeout: 300,
        }
        return config
    },
}