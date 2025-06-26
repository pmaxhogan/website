module.exports = {
    siteMetadata: {
        siteUrl: "https://maxhogan.dev",
        title: "Max's Portfolio",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {}
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-plugin-mdx-frontmatter"
        },
        
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                entryLimit: 30,
                resolvePages: ({ allMdx: { nodes: pages } }) => {
                    return pages.map(mdx => {
                        const slug = mdx.fields && mdx.fields.slug;
                        if (!slug) {
                            // eslint-disable-next-line no-console
                            console.warn('gatsby-plugin-sitemap: Skipping MDX node with invalid slug:', mdx);
                        }
                        
                        console.log('slug:', slug);
                        return {
                            path: slug ? slug : undefined,
                            // lastmod: mdx.frontmatter.date,
                            changefreq: "weekly",
                            priority: 0.7,
                        };
                    });
                },
                serialize: ({ path, changefreq, priority }) => {
                    return {
                        url: path,
                        changefreq,
                        priority,
                    }
                },
                resolveSiteUrl: () => "https://maxhogan.dev",
                query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allMdx{
            nodes {
              fields { slug }
            }
          }
        }
      `
            },
        },
    ],
};
