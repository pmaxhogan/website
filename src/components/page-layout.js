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

    const { children, pageContext = {}, path } = props;
    const frontmatter = pageContext.frontmatter || {};
    return <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{frontmatter.title || siteMetadata.site.siteMetadata.title}</title>
            <meta name="description" content={frontmatter.summary || ''} />
        </Helmet>
        <header>
            {/*<a href={"/"}>
                <img src={logo} alt="Logo" />
            </a>*/}
            <a style={sitenameStyle} href={"/"}>
                {siteMetadata.site.siteMetadata.title}
            </a>
            <a href="/#featured">Featured</a>
            <a href="/#work">Work</a>
            <span>
                Projects by <span className="projects-by">{categories.map(category => <span key={Math.random()}><a href={"/#by-" + category.toLowerCase()}>{category}</a></span>)}</span>
            </span>
            <a href="/#socials">Socials</a>
        </header>
        <main>
            {path !== "/" && <h1>{frontmatter.title}</h1>}
            {frontmatter.tags && !frontmatter.tags.includes("no-show") && <TagsList tags={frontmatter.tags}/>} 
            <MDXProvider components={customComponents}>{children}</MDXProvider>
        </main>
        <div id="spacer"/>
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,96L30,90.7C60,85,120,75,180,96C240,117,300,171,360,208C420,245,480,267,540,240C600,213,660,139,720,90.7C780,43,840,21,900,53.3C960,85,1020,171,1080,176C1140,181,1200,107,1260,101.3C1320,96,1380,160,1410,192L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            <div id="footer-main">
                <code>title: {frontmatter.title || ''}</code>
                <code>tags: {(frontmatter.tags || []).join(",")}</code>
                <code>summary: {frontmatter.summary || ''}</code>
            </div>
        </footer>
    </>
};
