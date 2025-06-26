import * as React from "react";
import ProjectList from "../components/project-list";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const titleCase = str => str.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ');

export default function ProjectTabs({data, tabs, showImg, by}) {
    if(tabs instanceof Array){
        tabs = tabs.map(tab => tab instanceof Array ?
            {filter: tab[0], title: tab[1]} :
            {filter: tab, title: titleCase(tab)}
        );
    }

    return <>
        <Tabs>
            <span id={"by-" + by.toLowerCase()}/>
        <div className="project-tabs-sticky">
        <h2>Projects by {by}</h2>
        <TabList>
            {tabs && tabs.map(tab => <Tab key={Math.random()}>{tab && tab.title}</Tab>)}
        </TabList>
        </div>
        {tabs && tabs.map(tab =>
            <TabPanel key={Math.random()}>
                <ProjectList showImg={showImg} list={data} filter={tab.filter}/>
            </TabPanel>
        )}
    </Tabs>
        </>;
};
