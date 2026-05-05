import "../styles/training.css"
import "../styles/main-block-md.css"
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const theory = import.meta.glob("../content/theory/*md?raw", { as: 'raw', eager: true });
const materials = import.meta.glob("../content/materials/*md?raw", { as: 'raw', eager: true })

function MainBlock({ activeId, type }) {
    let content;
    const path = `../content/${type}/${activeId}.md`;

    if (type === 'theory') {
        content = theory[path];
    } else if (type === 'materials') {
        content = materials[path];
    }

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