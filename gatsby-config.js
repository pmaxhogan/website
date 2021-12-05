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
            options: {
                defaultLayouts: {
                    pages: require.resolve("./src/components/page-layout.js")
                }
            }
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
            resolve: "gatsby-plugin-firebase",
            options: {
                features: {
                    auth: false,
                    database: false,
                    firestore: false,
                    storage: false,
                    messaging: false,
                    functions: false,
                    performance: false,
                    analytics: true,
                },
                credentials: {
                    apiKey: "AIzaSyADK_b5yOxsZma7H9Bufu-HKpRrxyuPMGk",
                    authDomain: "maxs-portfolio.firebaseapp.com",
                    projectId: "maxs-portfolio",
                    storageBucket: "maxs-portfolio.appspot.com",
                    messagingSenderId: "789254006298",
                    appId: "1:789254006298:web:0cfcd28bc4bbdcb11d13a3",
                    measurementId: "G-HX7T79EKDN"
                }
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                resolvePages: ({ allMdx: { nodes: pages } }) =>
                    pages.map(mdx => ({
                        path: `/${mdx.slug}`,
                        // lastmod: mdx.frontmatter.date,
                        changefreq: "weekly",
                        priority: 0.7,
                    })),
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
              slug
            }
          }
        }
      `
            },
        },
    ],
};
