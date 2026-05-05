import "../styles/training.css"
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const lessons = import.meta.glob("../content/data/*md", { as: 'raw', eager: true });

function MainBlock({ activeId }) {
    const path = `../content/data/${activeId}.md`;
    const content = lessons[path];

    return (
        <div id="MainBlock">
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default MainBlock