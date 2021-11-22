import * as React from "react";
import Tag from "./tag";
import "../styles/project.css";


const tagsContainerStyle = {
    margin: '10px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
}

const imgStyle = {
    maxHeight: "300px"
};


export default function Project(props){
    if(props.tags.includes("no-show")) return null;

    return <div className="project">
        <a href={props.link}><h2>{props.title}</h2></a>
        {props.img && <img src={props.img} style={imgStyle} alt=""/>}
        <div className="tags-container" style={tagsContainerStyle}>{props.tags.sort().map(tag => <Tag key={Math.random()} name={tag} />)}</div>
            {props.summary}
    </div>
}
