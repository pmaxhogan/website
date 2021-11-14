import * as React from "react"

export default function Layout({ children, pageContext: { frontmatter } }) {
    return (
        <div>
        {JSON.stringify(frontmatter)}
            <h1>{frontmatter.title}</h1>
            <div>{children}</div>
        </div>
    )
};
