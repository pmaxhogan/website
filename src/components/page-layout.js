import * as React from "react"
import {MDXProvider} from "@mdx-js/react";
import AsciinemaEmbed from "./asciinema-embed";
import KAEmbed from "./ka-embed";
import "../styles/main.css"
import {Helmet} from "react-helmet";
import { useStaticQuery, graphql } from 'gatsby'
import TagsList from "./tags-list";

// override for <a> elements to ensure that links to external sites are safe and open in a new tab
const MyLink = props => {
    const isLocal = !props.href || (!props.href.startsWith("//") && !props.href.includes(":"));

    if(isLocal){
        return <a {...props} />
    }else{
        return <a rel="noopener noreferrer" target="_blank" {...props}/>
    }
};

const sitenameStyle = {
    fontFamily: "Raleway",
    fontWeight: 900
};

const Video = props => props.block ? <video style={{maxWidth: 400, display: "block"}} controls {...props} /> : <video style={{maxWidth: 400}} controls {...props} />;

const customComponents = {
    a: MyLink,
    AsciinemaEmbed,
    KAEmbed,
    Video
};

export default function Layout(props) {
    const siteMetadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

    const categories = "Type,Language,Library,DB,Cloud Platform".split(",");

    const { children, pageContext: { frontmatter }, path} = props;
    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{frontmatter.title}</title>
            <meta name="description" content={frontmatter.summary} />
        </Helmet>
        <header>
            {/*<a href={"/"}>
                <img src={logo} alt="Logo" />
            </a>*/}
            <a style={sitenameStyle} href={"/"}>
                {siteMetadata.site.siteMetadata.title}
            </a>
            <a href="/#featured">Featured</a>
            <span>
                Projects by <span className="projects-by">{categories.map(category => <span key={Math.random()}><a href={"/#by-" + category.toLowerCase()}>{category}</a></span>)}</span>
            </span>
        </header>
        <main>
            {path !== "/" && <h1>{frontmatter.title}</h1>}
            {frontmatter.tags && !frontmatter.tags.includes("no-show") && <TagsList tags={frontmatter.tags}/>}
            <MDXProvider components={customComponents}>{children}</MDXProvider>
            <code>{JSON.stringify(frontmatter)}</code>
        </main>
    </>
};
