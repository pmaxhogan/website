import * as React from "react"
import Project from "./project";

export default function ProjectList({list, filter}){
    if(!list) return null;

    let filterTags = [];
    if(filter){
        filterTags = filter.split(",");
        list = list.filter(page => filterTags.every(tag => page.node.frontmatter.tags.includes(tag)));
    }


    return list.map(page => <Project link={page.node.slug} title={page.node.frontmatter.title} summary={page.node.frontmatter.summary} tags={page.node.frontmatter.tags.filter(tag => !filterTags.includes(tag))} />)
}
