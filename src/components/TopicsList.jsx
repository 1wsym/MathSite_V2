import "../styles/training.css"
import topicsData from "../data/topic-titles.json"

function TopicsList() {

    return (
        <>
            <div className="topics-list">
                <ul>
                    {topicsData.map((topic) => (
                        <li className="arrows-list" key={topic.id}>
                            <md-icon slot="icon">arrow_right</md-icon>
                            {topic.title}
                            <ol>
                                {topic.subTitles.map((subTopic) => (
                                    <li key={subTopic.id}>{subTopic.title}</li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TopicsList