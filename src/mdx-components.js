import * as React from "react";
import AsciinemaEmbed from "./components/asciinema-embed";
import KAEmbed from "./components/ka-embed";

const MyLink = props => {
    const isLocal = !props.href || (!props.href.startsWith("//") && !props.href.includes(":"));
    if(isLocal){
        return <a {...props} />
    }else{
        return <a rel="noopener noreferrer" target="_blank" {...props}/>
    }
};

const Video = props => props.block ? <video style={{maxWidth: 400, display: "block"}} controls {...props} /> : <video style={{maxWidth: 400}} controls {...props} />;

export const mdxComponents = {
    a: MyLink,
    AsciinemaEmbed,
    KAEmbed,
    Video
};
