import { useState } from "react"
import MainBlock from "../components/MainBlock"
import TopicsList from "../components/TopicsList"
import Sidebar from "../components/Sidebar"
import "../styles/training.css"

function Training() {

    const [activeTopicId, setActiveTopicId] = useState("0");
    const [contentType, setContentType] = useState('theory');

    return (
        <>
            <div id="Training">
                <TopicsList onSelectTopic={setActiveTopicId} activeSubTopicId={activeTopicId} />
                <MainBlock activeId={activeTopicId} type={contentType} />
                <Sidebar onTypeChange={setContentType} activeType={contentType} />
            </div>
        </>
    )
}

export default Training