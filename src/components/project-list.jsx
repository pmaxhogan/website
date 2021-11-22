import * as React from "react"
import Project from "./project";

const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
};

export default function ProjectList({list, filter}){
    if(!list) return null;

    list = list.sort((a, b) => (a.node.frontmatter.title > b.node.frontmatter.title) ? 1 : ((b.node.frontmatter.title > a.node.frontmatter.title) ? -1 : 0))

    let filterTags = [];
    if(filter){
        filterTags = filter.split(",");
        list = list.filter(page => filterTags.every(tag => page.node.frontmatter.tags.includes(tag)));
    }


    return <div style={listStyle}>
        {list.map(page => <Project key={Math.random()} link={page.node.slug} title={page.node.frontmatter.title} summary={page.node.frontmatter.summary} tags={page.node.frontmatter.tags.filter(tag => !filterTags.includes(tag))} />)}
    </div>
}
