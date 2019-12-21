const withMDX = require('@next/mdx')
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')
module.exports =
  withSourceMaps(
    withCSS({
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
      },
      webpack(config, options) {
        config.module.rules.push({
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        });
        return config
      }
    }))
/*
module.exports =
  withSourceMaps({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      });
      config.module.rules.push({
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      });
      return config
    }
  })
  */