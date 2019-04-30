/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const TypedCSSModules = require("@nice-labs/typed-css-modules")

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.module\.s?css/,
          use: [TypedCSSModules.loader],
        },
      ],
    },
  })
}
