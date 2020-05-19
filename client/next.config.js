
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
//const withPlugins = require('next-compose-plugins');
/*
module.exports = withPlugins([
  [withSourceMaps],
  [withCSS],
  [withMDX]
], {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
  ,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
  },
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    });
    if (dev) {
      config.watchOptions = {
        poll: true
      }
    }
    config.resolve.extensions = [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".md", ".mdx"];
    return config
  }
});
*/

module.exports =
  withSourceMaps(
    withCSS(
      withMDX({
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
        },
        webpack: (config, { dev }) => {
          config.module.rules.push({
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader'
          });
          if (dev) {
            config.watchOptions = {
              poll: true
            }
          }
          config.resolve.extensions = [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".md", ".mdx"];
          return config
        }
      })
    )
  )

