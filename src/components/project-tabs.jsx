import * as React from "react";
import ProjectList from "../components/project-list";
import {resetIdCounter, Tab, TabList, TabPanel, Tabs} from "react-tabs";

const titleCase = str => str.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ');

resetIdCounter();

export default function ProjectTabs({data, tabs, showImg}) {
    if(tabs instanceof Array){
        tabs = tabs.map(tab => tab instanceof Array ?
            {filter: tab[0], title: tab[1]} :
            {filter: tab, title: titleCase(tab)}
        );
    }

    return <Tabs>
        <TabList>
            {tabs && tabs.map(tab => <Tab key={Math.random()}>{tab && tab.title}</Tab>)}
        </TabList>
        {tabs && tabs.map(tab =>
            <TabPanel key={Math.random()}>
                <ProjectList showImg={showImg} list={data} filter={tab.filter}/>
            </TabPanel>
        )}
    </Tabs>;
};
