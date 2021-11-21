import * as React from "react"
import Tag from "./tag";

export default function Project(props){
    if(props.tags.includes("no-show")) return null;

    console.log(props.tags);

    return <div>
        <a href={props.link}><h3>{props.title}</h3></a>
            {props.tags.map(tag => <Tag name={tag} />)}
            {props.summary}
    </div>
}
