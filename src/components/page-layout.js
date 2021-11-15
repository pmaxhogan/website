import * as React from "react"
import {MDXProvider} from "@mdx-js/react";
import AsciinemaEmbed from "./asciinemia-embed";

// override for <a> elements to ensure that links to external sites are safe and open in a new tab
const MyLink = props => {
    const url = new URL(props.href || "#", window.location.href);

    if(url.origin === window.location.origin){
        return <a {...props} />
    }else{
        return <a rel="noopener noreferrer" target="_blank" {...props}/>
    }
};

const customComponents = {
    a: MyLink,
    AsciinemaEmbed
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
