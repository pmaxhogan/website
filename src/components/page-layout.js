import * as React from "react"
import {MDXProvider} from "@mdx-js/react";
import AsciinemaEmbed from "./asciinemia-embed";
import KAEmbed from "./ka-embed";
import "../styles/main.css"

// override for <a> elements to ensure that links to external sites are safe and open in a new tab
const MyLink = props => {
    const isLocal = !props.href || (!props.href.startsWith("//") && !props.href.includes(":"));

    if(isLocal){
        return <a {...props} />
    }else{
        return <a rel="noopener noreferrer" target="_blank" {...props}/>
    }
};

const customComponents = {
    a: MyLink,
    AsciinemaEmbed,
    KAEmbed
};

export default function Layout({ children, pageContext: { frontmatter } }) {
    return (
        <div>

            <h1>{frontmatter.title}</h1>
            <MDXProvider components={customComponents}>{children}</MDXProvider>
            <code>{JSON.stringify(frontmatter)}</code>
        </div>
    )
};
