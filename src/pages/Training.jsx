import { useState } from "react"
import MainBlock from "../components/MainBlock"
import TopicsList from "../components/TopicsList"
import Sidebar from "../components/Sidebar"
import "../styles/training.css"

function Training() {

    const [activeTopicId, setActiveTopicId] = useState(null);

    return (
        <>
            <div id="Training">
                <TopicsList onSelectTopic={setActiveTopicId} />
                <MainBlock activeId={activeTopicId} />
                <Sidebar />
            </div>
        </>
    )
}

export default Training