import * as React from "react"

const tagStyle = (colorStyle = "#000") => ({
    border: '1px solid ' + colorStyle,
    color: colorStyle,
    padding: 5,
    // margin: "5px 0",
});

const tagCategories = {
    languages: ["#0023ff", ['js', 'java', 'python']],
    types: ["#009dff", ['web', 'game', 'cli', 'joke']],
    libraries: ["#00ffeb", ['vue', 'react', 'tensorflow', 'electron']],
    dbs: ["#a80000", ['s3', 'neo4j', 'firestore', 'mongodb', 'memcached']],
    platform: ["#d90000", ['gcp', 'aws', 'firebase', "heroku"]]
};

export default function Tag({name}){
    const languageCategories = Object.values(tagCategories).filter(category => category[1].includes(name));
    const colorStyle = languageCategories && languageCategories[0] && languageCategories[0][0];

    return <code style={tagStyle(colorStyle)}>{name}</code>
}
