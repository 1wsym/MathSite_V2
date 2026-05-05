import "../styles/training.css"
import "../styles/main-block-md.css"
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const theory = import.meta.glob("../content/theory/*.md", { as: 'raw', eager: true });
const materials = import.meta.glob("../content/materials/*.md", { as: 'raw', eager: true });
console.error("Найденные файлы теории при загрузке:", theory);

function MainBlock({ activeId, type }) {
    const allContent = {
        theory: theory,
        materials: materials
    };

    const currentFiles = allContent[type] || {};
    const targetKey = Object.keys(currentFiles).find(key => {

        return key.endsWith(`/${activeId}.md`);
    });

    if (Object.keys(currentFiles).length === 0) {
        return <div>Файлы не найдены в категории {type}</div>;
    }

    const content = targetKey ? currentFiles[targetKey] : "";
    console.error("Доступные ключи в текущем типе:", Object.keys(currentFiles));
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