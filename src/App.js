import React from "react";
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe";
import Section from "./components/Section";


const sectionData = [
    {
        title: "Skills",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic inventore magnam sequi placeat eveniet quisquam illum, enim autem similique nemo ad perferendis saepe dolor in quos pariatur, ducimus quam ex."
    },
    {
        title: "Qualification",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic inventore magnam sequi placeat eveniet quisquam illum, enim autem similique nemo ad perferendis saepe dolor in quos pariatur, ducimus quam ex."
    },
    {
        title: "Projects",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic inventore magnam sequi placeat eveniet quisquam illum, enim autem similique nemo ad perferendis saepe dolor in quos pariatur, ducimus quam ex."
    }
];
const App = () => {


    return (<div>
        <Navbar />
        <AboutMe />
        {
            sectionData.map((data)=>(
                <Section title={data.title} description={data.description} />
            ))
        }
    </div>)
}

export default App;