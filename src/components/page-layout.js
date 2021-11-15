import * as React from "react"
import {MDXProvider} from "@mdx-js/react";

const shortcodes = {};

export default function Layout({ children, pageContext: { frontmatter } }) {
    return (
        <div>
        {JSON.stringify(frontmatter)}

            <h1>{frontmatter.title}</h1>
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </div>
    )
};
