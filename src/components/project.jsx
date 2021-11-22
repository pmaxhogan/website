import * as React from "react";
import Tag from "./tag";

const projectStyle = {
    margin: 5,
    padding: 5,
    border: '1px solid black'
}

const tagsContainerStyle = {
    margin: '10px 0',
    display: 'flex',
    flexWrap: 'wrap'
}

export default function Project(props){
    if(props.tags.includes("no-show")) return null;

    return <div style={projectStyle}>
        <a href={props.link}><h3>{props.title}</h3></a>
        <div style={tagsContainerStyle}>{props.tags.sort().map(tag => <Tag key={Math.random()} name={tag} />)}</div>
            {props.summary}
    </div>
}
