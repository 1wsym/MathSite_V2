import { useState } from "react";

import "../styles/training.css"

function TopicsItem({ topic, onSelect }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = (event) => {
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
                            <li key={subTopic.id} onClick={() => onSelect(subTopic.id)}>{subTopic.title} </li>
                        ))}
                    </ol>
                )}
            </li>
        </>
    )
}

export default TopicsItem