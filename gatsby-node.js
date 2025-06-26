const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode, basePath: 'src/pages' });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type Mdx implements Node {
      fields: MdxFields
    }
    type MdxFields {
      slug: String
    }
  `);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // You can add custom page creation logic here if needed
};
