import { useState } from "react";

import "../styles/training.css"

function TopicsItem({ topic, onSelect, selectedId }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <li className="arrows-list" key={topic.id}>
                <div className={`icon-and-string ${isOpen ? 'is-open' : ''}`} onClick={toggleOpen}>
                    <md-icon slot="icon" className={`list-icons ${isOpen ? 'is-open' : ''}`}>arrow_right</md-icon>
                    {topic.title}
                </div>
                {isOpen && (
                    <ol onClick={(event) => event.stopPropagation()}>
                        {topic.subTitles.map((subTopic) => (
                            <li className={`subtopic-item ${subTopic.id === selectedId ? 'active' : ''}`} key={subTopic.id} onClick={() => onSelect(subTopic.id)}>{subTopic.title}</li>
                        ))}
                    </ol>
                )}
            </li>
        </>
    )
}

export default TopicsItem