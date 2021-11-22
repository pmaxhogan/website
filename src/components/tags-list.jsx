import * as React from "react";
import Tag from "./tag";

export default function TagsList({tags, style = {}}){
    if(!tags || !tags.length) return null;

    return <div className="tags-container" style={style}>{tags.sort().map(tag => <Tag key={Math.random()} name={tag} />)}</div>;
}
