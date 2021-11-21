import * as React from "react"
import Tag from "./tag";

export default function Project(props){
    if(props.tags.includes("no-show")) return null;

    return <div>
        <a href={props.link}><h3>{props.title}</h3></a>
            {props.tags.map(tag => <Tag key={Math.random()} name={tag} />)}
            {props.summary}
    </div>
}
