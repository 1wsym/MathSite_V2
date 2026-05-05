import "../styles/training.css"
import "../styles/main-block-md.css"
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const theory = import.meta.glob("../content/theory/*.md?raw", { as: 'raw', eager: true });
const materials = import.meta.glob("../content/materials/*.md?raw", { as: 'raw', eager: true });
console.log("Найденные файлы теории при загрузке:", theory);

function MainBlock({ activeId, type }) {
    const allContent = {
        theory: theory,
        materials: materials
    };

    const currentFiles = allContent[type] || {};
    const targetKey = Object.keys(currentFiles).find(key =>
        key.endsWith(`/${activeId}.md`)
    );

    const content = targetKey ? currentFiles[targetKey] : "";
console.log("Доступные ключи в текущем типе:", Object.keys(currentFiles));
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