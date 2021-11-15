import * as React from "react"

const elemStyle = {
    maxWidth: "100%",
    border: "none",
    display: "block"
}

export default function AsiinemiaEmbed(props){
    const {id} = props;
    const src = `https://www.khanacademy.org/computer-programming/x/${id}/embedded?editor=no&buttons=no&author=no&embed=yes`

    return (
        <iframe width="401" height="401" src={src} style={elemStyle}/>
    )
}
