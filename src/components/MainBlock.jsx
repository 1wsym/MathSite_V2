import "../styles/training.css"
import "../styles/main-block-md.css"
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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

function MainBlock({ activeId, type }) {
    const currentFiles = type === 'theory' ? theory : materials;

    const targetKey = Object.keys(currentFiles).find(key => {
        const fileName = key.split('/').pop();
        return fileName === `${activeId}.md`;
    });

    const content = targetKey ? currentFiles[targetKey] : "Конспект не найден";

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