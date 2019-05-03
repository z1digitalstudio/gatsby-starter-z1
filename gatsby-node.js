/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const TypedCSSModules = require('@nice-labs/typed-css-modules');
const { join, resolve } = require('path');

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
  });
};

async function getAllPages(defaultLanguage, graphql) {
  const {
    data: {
      allFile: { nodes },
    },
  } = await graphql(`
    query AllPages {
      allFile(filter: { relativeDirectory: { glob: "views/**" } }) {
        nodes {
          relativePath
          relativeDirectory
          name
        }
      }
    }
  `);

  const pages = [];

  for (const { name: lang, relativeDirectory } of nodes) {
    const [_, ...child] = relativeDirectory.split('/');
    const pageName = child.join('/');
    const route = pageName === 'index' ? '' : `/${pageName}`;

    pages.push({
      path: `/${lang === defaultLanguage ? '' : lang}${route}`,
      pageName,
      lang,
    });
  }

  return pages;
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const {
    data: {
      contentYaml: { defaultLanguage },
    },
  } = await graphql(`
    query DefaultLanguage {
      contentYaml {
        defaultLanguage
      }
    }
  `);

  const pages = await getAllPages(defaultLanguage, graphql);

  pages.forEach(({ pageName, path, lang }) => {
    createPage({
      path,
      context: {
        lang,
      },
      component: resolve(join('src', 'views', pageName, 'index.tsx')),
    });
  });
};
