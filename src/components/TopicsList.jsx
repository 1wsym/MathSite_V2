import "../styles/training.css"
import titlesList from "../content/titles.json"
import TopicsItem from "./TopicsItem";

function TopicsList({ onSelectTopic, activeSubTopicId }) {

    return (
        <>
            <div className="topics-list">
                <ul>
                    {titlesList.map((topic) => (
                        <TopicsItem
                            key={topic.id}
                            topic={topic}
                            onSelect={onSelectTopic}
                            selectedId={activeSubTopicId}
                        />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TopicsList