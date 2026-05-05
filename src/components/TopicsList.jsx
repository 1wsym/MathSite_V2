import "../styles/training.css"
import topicsData from "../content/titles.json"
import TopicsItem from "./TopicsItem";

function TopicsList({ onSelectTopic }) {

    return (
        <>
            <div className="topics-list">
                <ul>
                    {topicsData.map((topic) => (
                        <TopicsItem key={topic.id} topic={topic} onSelect={onSelectTopic}/>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TopicsList