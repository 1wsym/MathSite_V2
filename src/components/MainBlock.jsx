import "../styles/training.css"
import "../styles/main-block-md.css"
import "../styles/lessons.css"
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import Practice from "./Practice";

const theory = import.meta.glob("/src/content/theory/*.md", {
    query: '?raw',
    import: 'default',
    eager: true
});

const materials = import.meta.glob("/src/content/materials/*.md", {
    query: '?raw',
    import: 'default',
    eager: true
});

const practice = import.meta.glob("/src/content/practice/*.md", {
    query: '?raw',
    import: 'default',
    eager: true
});

function MainBlock({ activeId, type }) {

    const currentFiles =
        type === 'theory' ? theory :
            type === 'materials' ? materials :
                type === 'practice' ? practice : {};

    const targetKey = Object.keys(currentFiles).find(key => {
        const fileName = key.split('/').pop();
        return fileName === `${activeId}.md`;
    });

    const content = targetKey ? currentFiles[targetKey] : "";

    return (
        <div id="MainBlock">
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeRaw, rehypeKatex]}
                components={{
                    section: ({ node, ...props }) => {
                        if (props.className === 'interactive-task') {
                            return (
                                <Practice
                                    question={props.question}
                                    correctAnswer={props.correctanswer}
                                    solution={props.solution}
                                />
                            );
                        }
                        return <section {...props} />;
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default MainBlock