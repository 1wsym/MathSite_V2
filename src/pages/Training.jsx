import MainBlock from "../components/MainBlock"
import TopicsList from "../components/TopicsList"
import Sidebar from "../components/Sidebar"
import "../styles/training.css"

function Training() {
    return (
        <>
            <div id="Training">
                <TopicsList />
                <MainBlock />
                <Sidebar />
            </div>
        </>
    )
}

export default Training