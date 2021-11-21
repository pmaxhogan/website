import * as React from "react"

const tagStyle = {
    border: '1px solid black',
    padding: 5,
    margin: 5,

};

export default function Tag({name}){
    return <code style={tagStyle}>{name}</code>
}
