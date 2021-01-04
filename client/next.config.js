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

const internalNodeModulesRegExp = /src(?!\/(?!.*js))/
const externalNodeModulesRegExp = /node_modules(?!\/@zeit(?!.*node_modules))/

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
                    use: [{
                        loader: "babel-loader"
                    }, {
                        loader: "react-svg-loader",
                    }]
                })
                config.externals = {
                    "frappe": "frappe"
                }
                if (dev) {
                    config.watchOptions = {
                        poll: true
                    }
                }
                config.resolve.extensions = [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".md", ".mdx"];
                // config.externals = config.externals.map(external => {
                //     if (typeof external !== "function") return external
                //     return (ctx, req, cb) => (internalNodeModulesRegExp.test(req) ? cb() : external(ctx, req, cb))
                // })

                // defaultLoaders.babel.options.plugins.push(["transform-define"])
                // config.module.rules.push({
                //     test: /\.+(js|jsx)$/,
                //     use: defaultLoaders.babel,
                //     include: [internalNodeModulesRegExp],
                // })
                return config
            }
        })
    )
    //     webpack: (config, { dev, isServer }) => {
    //         if (!isServer) {
    //             config.node = {
    //                 fs: 'empty'
    //             }
    //         }

//         config.module.rules.push({
//             test: /\.css$/i,
//             exclude: /node_modules/,
//             use: [
//                 "style-loader",
//                 {
//                     loader: "css-loader",
//                     options: {
//                         modules: true
//                     }
//                 }
//             ]
//         })
//         return config
//     }
// }