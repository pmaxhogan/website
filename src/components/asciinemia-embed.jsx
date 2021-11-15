import * as React from "react"

const elemStyle = {
    maxWidth: "100%",
    border: "none",
    display: "block"
}

export default function AsiinemiaEmbed(props){
    const {id, width, height} = props;
    const src = `https://asciinema.org/a/${id}/iframe`

    return (
        <iframe width={width} height={height} src={src} style={elemStyle}/>
    )
}
