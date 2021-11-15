import * as React from "react"

export default function AsiinemiaEmbed(props){
    const {id} = props;
    const src = `https://asciinema.org/a/${id}.js`

    return (
        <script src={src}/>
    )
}
