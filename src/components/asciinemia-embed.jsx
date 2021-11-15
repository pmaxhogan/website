import * as React from "react"
import {Helmet} from "react-helmet";

export default function AsiinemiaEmbed(props){
    const {id, width, height} = props;
    const src = `https://asciinema.org/a/${id}/iframe`

    return (
        <iframe width={width} height={height} src={src}/>
    )
}
