const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex]
    }
})
// https://github.com/mdx-js/mdx/issues/465
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withCSS(
    withMDX({
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
        },
        webpack: (config, { dev, webpack, defaultLoaders, isServer }) => {
            if (!isServer) {
                config.node = {
                    fs: 'empty'
                }
            }
            config.module.rules.push({
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            });
            config.module.rules.push({
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader"
                }, {
                    loader: "react-svg-loader",
                }]
            })
            if (dev) {
                config.watchOptions = {
                    poll: true
                }
            }
            config.resolve.extensions = ['.mjs', ".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".md", ".mdx"];
            return config
        }
    })
)