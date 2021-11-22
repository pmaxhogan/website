import * as React from "react";
import Tag from "./tag";
import "../styles/project.css";
import TagsList from "./tags-list";



const imgStyle = {
    maxHeight: "300px"
};


export default function Project(props){
    if(props.tags.includes("no-show")) return null;

    return <div className="project">
        <a href={props.link}><h2>{props.title}</h2></a>
        {props.img && <img src={props.img} style={imgStyle} alt=""/>}
        <TagsList style={{justifyContent: "center"}} tags={props.tags} />
            {props.summary}
    </div>
}
